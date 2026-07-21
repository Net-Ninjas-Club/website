import { NextRequest, NextResponse } from 'next/server';
import { submitEnquiry } from '@/lib/airtable';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { parentName, childName, ageGroup, email, phone, preferredSession, message, website } = body;

    // Honeypot field — real users never fill this in.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!parentName || !childName || !ageGroup || !email || !preferredSession) {
      return NextResponse.json(
        { ok: false, error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    await submitEnquiry({ parentName, childName, ageGroup, email, phone, preferredSession, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Join form submission failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong sending your enquiry. Please try again or message us on Facebook.' },
      { status: 500 }
    );
  }
}
