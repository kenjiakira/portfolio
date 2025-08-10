import nodemailer from 'nodemailer'

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateFormData = (data: {
  name: string
  email: string
  subject: string
  message: string
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []

  // Trim all fields for validation
  const trimmedData = {
    name: data.name?.trim() || '',
    email: data.email?.trim() || '',
    subject: data.subject?.trim() || '',
    message: data.message?.trim() || ''
  }

  if (!trimmedData.name) {
    errors.push('Name is required')
  }

  if (!trimmedData.email) {
    errors.push('Email is required')
  } else if (!validateEmail(trimmedData.email)) {
    errors.push('Invalid email format')
  }

  if (!trimmedData.subject) {
    errors.push('Subject is required')
  }

  if (!trimmedData.message) {
    errors.push('Message is required')
  } else if (trimmedData.message.length < 10) {
    errors.push(`Message must be at least 10 characters long (currently ${trimmedData.message.length} characters)`)
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

const createEmailTemplate = (data: {
  name: string
  email: string
  subject: string
  message: string
}) => {
  const timestamp = new Date().toLocaleString()
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Message</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; text-align: center; font-size: 28px;">
          📧 New Contact Message
        </h1>
        <p style="color: white; text-align: center; margin: 10px 0 0 0; opacity: 0.9;">
          Someone sent you a message from your portfolio
        </p>
      </div>
      
      <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #667eea;">
        <h2 style="color: #667eea; margin-top: 0; font-size: 20px;">👤 Contact Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 80px;">Name:</td>
            <td style="padding: 8px 0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">
              <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
            <td style="padding: 8px 0;">${data.subject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Time:</td>
            <td style="padding: 8px 0;">${timestamp}</td>
          </tr>
        </table>
      </div>
      
      <div style="background-color: white; padding: 25px; border: 1px solid #e9ecef; border-radius: 10px; margin-bottom: 25px;">
        <h2 style="color: #333; margin-top: 0; font-size: 20px;">💬 Message</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 3px solid #667eea;">
          <p style="margin: 0; line-height: 1.8; white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
      
      <div style="text-align: center; padding: 20px; background-color: #f8f9fa; border-radius: 10px; color: #6c757d; font-size: 14px;">
        <p style="margin: 0 0 10px 0;">This message was sent from your portfolio contact form.</p>
        <p style="margin: 0;">
          <strong>Quick Reply:</strong> Simply reply to this email to respond directly to ${data.name}.
        </p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 12px;">
        <p style="margin: 0;">© 2025 Kenji Akira Portfolio. All rights reserved.</p>
      </div>
    </body>
    </html>
  `
}

export const sendEmail = async (data: {
  name: string
  email: string
  subject: string
  message: string
}): Promise<{ success: boolean; error?: string }> => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration is missing')
    }
    
    // Trim all data before validation and processing
    const trimmedData = {
      name: data.name?.trim() || '',
      email: data.email?.trim() || '',
      subject: data.subject?.trim() || '',
      message: data.message?.trim() || ''
    }
    
    const validation = validateFormData(trimmedData)
    if (!validation.isValid) {
      throw new Error(validation.errors.join(', '))
    }

    const transporter = createTransporter()

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: trimmedData.email,
      subject: `Portfolio Contact: ${trimmedData.subject}`,
      html: createEmailTemplate(trimmedData),
    }

    await transporter.sendMail(mailOptions)

    return { success: true }
  } catch (error) {
    console.error('Email sending error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    }
  }
}
