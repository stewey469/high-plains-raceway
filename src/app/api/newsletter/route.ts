import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    // In production, integrate with a mailing list provider like:
    // - Mailchimp
    // - ConvertKit
    // - Resend Audiences
    console.log("Newsletter subscription:", {
      email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process subscription." },
      { status: 500 }
    );
  }
}
