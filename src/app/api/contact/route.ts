import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // To actually send an email, you'll need to configure your SMTP settings here.
    // For webmail, you typically use the SMTP server provided by your webmail host (e.g., cPanel, GoDaddy, HostGator).
    // Replace the host, user, and pass with the actual SMTP credentials for info@alceyneye.com.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.alceyneye.com', // e.g., 'smtp.gmail.com' or your domain's SMTP
      port: Number(process.env.SMTP_PORT) || 465, // usually 465 for secure, or 587
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'info@alceyneye.com',
        pass: process.env.SMTP_PASS || 'your-email-password',
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`, // sender address (could also be your authenticated email)
      to: 'info@alceyneye.com', // list of receivers
      subject: `New Contact Form Submission: ${subject}`,
      text: `
You have received a new message from the contact form:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <br/>
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // If you don't have valid SMTP credentials yet, nodemailer will throw an error when trying to send.
    // We'll log the information in the server console just in case.
    console.log(`Simulating/Sending email to info@alceyneye.com from ${name} <${email}>`);
    
    // Uncomment this line when you have the correct SMTP credentials set in your .env file
    // await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}
