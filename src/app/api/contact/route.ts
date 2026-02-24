import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In production, integrate with an email service like:
    // - Resend (resend.com)
    // - SendGrid
    // - AWS SES
    // For now, log the submission and return success.
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
