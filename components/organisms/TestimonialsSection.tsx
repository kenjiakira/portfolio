// "use client"

// import React from "react"
// import { motion } from "framer-motion"
// import { Star, Quote, ArrowRight } from "lucide-react"
// import Image from "next/image"
// import { useTranslations } from "@/hooks/use-translations-context"

// interface TestimonialsSectionProps {
//   darkMode: boolean
// }

// interface Testimonial {
//   name: string
//   position: string
//   company: string
//   avatar: string
//   contentKey: string
//   rating: number
//   project: string
//   duration: string
// }

// export function TestimonialsSection({ darkMode }: TestimonialsSectionProps) {
//   const { t } = useTranslations()

//   const testimonials: Testimonial[] = [
//     {
//       name: "Sarah Johnson",
//       position: "Senior Developer",
//       company: "TechCorp",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
//       contentKey: "testimonial_sarah_content",
//       rating: 5,
//       project: "E-commerce Platform",
//       duration: "6 months"
//     },
//     {
//       name: "Michael Chen",
//       position: "Product Manager",  
//       company: "InnovateLab",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//       contentKey: "testimonial_michael_content",
//       rating: 5,
//       project: "Mobile App Development",
//       duration: "4 months"
//     }
//   ]

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <Star
//         key={i}
//         className={`h-5 w-5 ${
//           i < rating
//             ? "text-yellow-400 fill-current"
//             : darkMode
//             ? "text-slate-600"
//             : "text-slate-300"
//         }`}
//       />
//     ))
//   }

//   return (
//     <section className="py-20 lg:py-32 px-4 lg:px-6 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-20 ${
//           darkMode ? "bg-blue-500" : "bg-blue-300"
//         }`}></div>
//         <div className={`absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-20 ${
//           darkMode ? "bg-purple-500" : "bg-purple-300"
//         }`}></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           {/* Header */}
//           <div className="text-center mb-16">
//             <motion.div
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
//               style={{
//                 background: darkMode 
//                   ? "rgba(255, 255, 255, 0.05)" 
//                   : "rgba(0, 0, 0, 0.05)",
//                 borderColor: darkMode 
//                   ? "rgba(255, 255, 255, 0.1)" 
//                   : "rgba(0, 0, 0, 0.1)"
//               }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <Quote className="h-4 w-4 text-blue-500" />
//               <span className={`text-sm font-medium ${
//                 darkMode ? "text-slate-300" : "text-slate-600"
//               }`}>
//                 Client Testimonials
//               </span>
//             </motion.div>

//             <motion.h2
//               className={`text-4xl lg:text-6xl font-bold mb-6 ${
//                 darkMode ? "text-white" : "text-slate-900"
//               }`}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               What Clients Say
//             </motion.h2>

//             <motion.p
//               className={`text-lg max-w-2xl mx-auto ${
//                 darkMode ? "text-slate-400" : "text-slate-600"
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               Real feedback from clients who have worked with me on their projects
//             </motion.p>
//           </div>

//           {/* Testimonials */}
//           <div className="space-y-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.3, duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className={`flex flex-col lg:flex-row gap-8 items-center ${
//                   index % 2 === 1 ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Avatar Section */}
//                 <motion.div
//                   className="flex-shrink-0"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <div className="relative">
//                     <div className={`absolute inset-0 rounded-full blur-xl opacity-30 ${
//                       darkMode ? "bg-blue-500" : "bg-blue-400"
//                     }`}></div>
//                     <Image
//                       src={testimonial.avatar}
//                       alt={testimonial.name}
//                       width={120}
//                       height={120}
//                       className="relative rounded-full ring-4 ring-white/10"
//                       loading="lazy"
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Content Section */}
//                 <div className="flex-1 text-center lg:text-left">
//                   {/* Rating */}
//                   <motion.div
//                     className="flex items-center justify-center lg:justify-start gap-1 mb-4"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: 0.4, duration: 0.6 }}
//                     viewport={{ once: true }}
//                   >
//                     {renderStars(testimonial.rating)}
//                   </motion.div>

//                   {/* Quote */}
//                   <motion.blockquote
//                     className={`text-xl lg:text-2xl leading-relaxed mb-6 italic ${
//                       darkMode ? "text-slate-200" : "text-slate-700"
//                     }`}
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: 0.5, duration: 0.6 }}
//                     viewport={{ once: true }}
//                   >
//                     "{t[testimonial.contentKey as keyof typeof t]}"
//                   </motion.blockquote>

//                   {/* Author Info */}
//                   <motion.div
//                     className="space-y-2"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6, duration: 0.6 }}
//                     viewport={{ once: true }}
//                   >
//                     <h4 className={`font-bold text-xl ${
//                       darkMode ? "text-white" : "text-slate-900"
//                     }`}>
//                       {testimonial.name}
//                     </h4>
//                     <p className={`text-lg font-medium ${
//                       darkMode ? "text-blue-400" : "text-blue-600"
//                     }`}>
//                       {testimonial.position}
//                     </p>
//                     <p className={`text-base ${
//                       darkMode ? "text-slate-400" : "text-slate-600"
//                     }`}>
//                       {testimonial.company}
//                     </p>
                    
//                     {/* Project Details */}
//                     <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
//                       darkMode 
//                         ? "bg-white/5 text-slate-300" 
//                         : "bg-black/5 text-slate-600"
//                     }`}>
//                       <span className="font-medium">{testimonial.project}</span>
//                       <span>•</span>
//                       <span>{testimonial.duration}</span>
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* Arrow */}
//                 <motion.div
//                   className="hidden lg:block flex-shrink-0"
//                   initial={{ opacity: 0, scale: 0 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.7, duration: 0.6 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className={`p-3 rounded-full ${
//                     darkMode 
//                       ? "bg-white/10 text-slate-400" 
//                       : "bg-black/10 text-slate-600"
//                   }`}>
//                     <ArrowRight className="h-6 w-6" />
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>

//           {/* CTA Section */}
//           <motion.div
//             className="text-center mt-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <motion.button
//               className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
//                 darkMode
//                   ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
//                   : "bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl"
//               }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span>View More Testimonials</span>
//               <ArrowRight className="h-4 w-4" />
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
