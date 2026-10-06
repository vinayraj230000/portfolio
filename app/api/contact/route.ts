import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = 'khushmeetsaini72@gmail.com';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return NextResponse.json(
      { success: false, error: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  const gmailUser = process.env.EMAIL_USER;
  const gmailPass = process.env.EMAIL_PASS;

  if (!gmailUser || !gmailPass) {
    console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
    return NextResponse.json(
      { success: false, error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email.trim(),
      subject: `Portfolio message from ${name.trim()}`,
      text: [
        'You received a new message from your portfolio contact form.',
        '',
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        '',
        'Message:',
        message.trim(),
      ].join('\n'),
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.trim().replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Email send error:', error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
    console.error('Unexpected error:', error);
    return NextResponse.json({ success: false, error: 'Unknown error occurred' }, { status: 500 });
  }
}
