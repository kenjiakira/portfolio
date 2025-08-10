"use client"

import React, { useRef, useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'

interface ThreeJSBackgroundProps {
  darkMode: boolean
}

export const ThreeJSBackground = React.memo(({ darkMode }: ThreeJSBackgroundProps) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const linesRef = useRef<THREE.LineSegments | null>(null)
  const velocitiesRef = useRef<Float32Array | null>(null)
  const isInitializedRef = useRef<boolean>(false)
  const [isReady, setIsReady] = useState(false)

  const shouldRender = useMemo(() => darkMode, [darkMode])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 100) 

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    console.log('ThreeJS Background - Dark Mode:', darkMode, 'Should Render:', shouldRender, 'Ready:', isReady, 'Initialized:', isInitializedRef.current)
    
    if (!shouldRender) {
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
        rendererRef.current = null
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
        animationIdRef.current = null
      }
      isInitializedRef.current = false
      return
    }

    if (!shouldRender || !isReady || !mountRef.current) {
      return
    }


    if (isInitializedRef.current && shouldRender) {
      return
    }

    console.log('Initializing ThreeJS Background...')

    const initTimer = setTimeout(() => {
      if (!mountRef.current || !shouldRender) return

      const scene = new THREE.Scene()
      sceneRef.current = scene

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      camera.position.z = 5

      const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: false, 
        powerPreference: "high-performance"
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) 
      renderer.setClearColor(0x000000, 0) 
      renderer.shadowMap.enabled = false 
      rendererRef.current = renderer

      mountRef.current.appendChild(renderer.domElement)

      const particleCount = Math.min(120, Math.floor(window.innerWidth / 10)) 
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      const velocities = new Float32Array(particleCount * 3) 
      velocitiesRef.current = velocities

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20
        positions[i + 1] = (Math.random() - 0.5) * 20
        positions[i + 2] = (Math.random() - 0.5) * 20

        velocities[i] = (Math.random() - 0.5) * 0.02
        velocities[i + 1] = (Math.random() - 0.5) * 0.02
        velocities[i + 2] = (Math.random() - 0.5) * 0.02

        colors[i] = 0.2 + Math.random() * 0.3 // R
        colors[i + 1] = 0.3 + Math.random() * 0.4 // G
        colors[i + 2] = 0.8 + Math.random() * 0.2 // B
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 0.1, 
        vertexColors: true,
        transparent: true,
        opacity: 0.9, 
        sizeAttenuation: true,
        depthWrite: false, 
        blending: THREE.AdditiveBlending
      })

      const particles = new THREE.Points(geometry, material)
      particlesRef.current = particles
      scene.add(particles)

      const lineGeometry = new THREE.BufferGeometry()
      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.4, 
        depthWrite: false
      })

      const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
      linesRef.current = lines
      scene.add(lines)

      const updateLines = () => {
        const positions = particles.geometry.attributes.position.array as Float32Array
        const linePositions: number[] = []
        const lineColors: number[] = []

        for (let i = 0; i < particleCount; i++) {
          for (let j = i + 1; j < particleCount; j++) {
            const distance = Math.sqrt(
              Math.pow(positions[i * 3] - positions[j * 3], 2) +
              Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
              Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
            )

            if (distance < 4) { 
              linePositions.push(
                positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
              )
              
              const opacity = 1 - (distance / 4) * 0.7
              lineColors.push(
                0.3, 0.4, 0.8, opacity,
                0.3, 0.4, 0.8, opacity
              )
            }
          }
        }

        if (linePositions.length > 0) {
          lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
          lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 4))
        }
      }

      let time = 0
      const animate = () => {
        time += 0.005 

        particles.rotation.x = Math.sin(time * 0.2) * 0.1
        particles.rotation.y = Math.cos(time * 0.15) * 0.1

        const positions = particles.geometry.attributes.position.array as Float32Array
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i]
          positions[i + 1] += velocities[i + 1]
          positions[i + 2] += velocities[i + 2]

          positions[i] += Math.sin(time + i * 0.1) * 0.001
          positions[i + 1] += Math.cos(time + i * 0.1) * 0.001

          if (Math.abs(positions[i]) > 10) velocities[i] *= -1
          if (Math.abs(positions[i + 1]) > 10) velocities[i + 1] *= -1
          if (Math.abs(positions[i + 2]) > 10) velocities[i + 2] *= -1
        }
        particles.geometry.attributes.position.needsUpdate = true

        updateLines()

        renderer.render(scene, camera)
        animationIdRef.current = requestAnimationFrame(animate)
      }

      animate()
      isInitializedRef.current = true
      console.log('ThreeJS Background initialized and animation started')

      let resizeTimeout: NodeJS.Timeout
      const handleResize = () => {
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(() => {
          if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
          }
        }, 100)
      }

      window.addEventListener('resize', handleResize)

      const cleanup = () => {
        window.removeEventListener('resize', handleResize)
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current)
          animationIdRef.current = null
        }
        if (renderer && mountRef.current) {
          mountRef.current.removeChild(renderer.domElement)
          renderer.dispose()
        }
        if (geometry) geometry.dispose()
        if (material) material.dispose()
        if (lineGeometry) lineGeometry.dispose()
        if (lineMaterial) lineMaterial.dispose()
        isInitializedRef.current = false
      }

      ;(window as any).__threeJSCleanup = cleanup
    }, 50) 

    return () => {
      clearTimeout(initTimer)
      if ((window as any).__threeJSCleanup) {
        (window as any).__threeJSCleanup()
        delete (window as any).__threeJSCleanup
      }
    }
  }, [shouldRender, isReady])

  if (!shouldRender) return null

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        opacity: 0.6, 
        willChange: 'transform',
        contain: 'layout style paint'
      }}
    />
  )
})
ThreeJSBackground.displayName = 'ThreeJSBackground'

