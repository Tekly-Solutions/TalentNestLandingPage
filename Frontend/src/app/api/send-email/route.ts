import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

type Payload = {
  firstName: string;
  lastName: string;
  email: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<Payload>;
    const firstName = body.firstName?.trim() || "";
    const lastName = body.lastName?.trim() || "";
    const email = body.email?.trim() || "";

    console.log("📧 Received email request:", { firstName, lastName, email });

    if (!firstName || !lastName || !email) {
      console.error("❌ Missing fields");
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FROM_EMAIL =
      process.env.MAIL_FROM || "TalentNest <onboarding@resend.dev>";
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

    console.log("🔑 Config check:", {
      hasApiKey: !!RESEND_API_KEY,
      fromEmail: FROM_EMAIL,
      adminEmail: ADMIN_EMAIL,
    });

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY not configured" },
        { status: 500 }
      );
    }
    if (!ADMIN_EMAIL) {
      return NextResponse.json(
        { success: false, error: "ADMIN_EMAIL not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    // Resolve local logo & embed as base64 data URI so email clients display it without external fetch.
    // If LOGO_URL env provided, prefer remote URL; else attempt to read from public folder.
    let LOGO_SRC = process.env.LOGO_URL || "";
    let EMBED_LOGO_DATA_URL: string | null = null;
    if (!LOGO_SRC) {
      try {
        const logoPath = path.join(process.cwd(), "public", "Talent Nest logo only.png");
        const fileBuf = fs.readFileSync(logoPath);
        const b64 = fileBuf.toString("base64");
        EMBED_LOGO_DATA_URL = `data:image/png;base64,${b64}`;
      } catch (e) {
        console.warn("Logo file not found or unreadable, falling back to text header.", e);
      }
    }
    const logoImgTag = EMBED_LOGO_DATA_URL
      ? `<img src="${EMBED_LOGO_DATA_URL}" alt="TalentNest Logo" style="max-width: 72%; max-height: 72%; display: block;" />`
      : LOGO_SRC
      ? `<img src="${LOGO_SRC}" alt="TalentNest Logo" style="max-width: 72%; max-height: 72%; display: block;" />`
      : "";

    const subject = `New Get Started request from ${firstName} ${lastName}`;

    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Get Started Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f4f4f4;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  
                  <!-- Header with Logo -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                      <div style="margin: 0 auto 18px; width: 110px; height: 110px; border-radius: 55px; background: #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                        ${logoImgTag}
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">TalentNest</h1>
                      <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">AI-Powered Talent Management Platform</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 24px;">New Get Started Submission 🎉</h2>
                      
                      <p style="margin: 0 0 25px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        You have a new inquiry from a potential client:
                      </p>

                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 6px; padding: 20px; margin-bottom: 25px;">
                        <tr>
                          <td style="padding: 8px 0;">
                            <strong style="color: #374151;">Name:</strong>
                            <span style="color: #1f2937; margin-left: 10px;">${firstName} ${lastName}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <strong style="color: #374151;">Email:</strong>
                            <a href="mailto:${email}" style="color: #10b981; margin-left: 10px; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <strong style="color: #374151;">Submitted:</strong>
                            <span style="color: #1f2937; margin-left: 10px;">${new Date().toLocaleString()}</span>
                          </td>
                        </tr>
                      </table>

                      <p style="margin: 0; color: #6b7280; font-size: 14px; font-style: italic;">
                        💡 Reply directly to this email to contact ${firstName}.
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
                        <strong>TalentNest</strong>
                      </p>
                      <p style="margin: 0 0 5px 0; color: #9ca3af; font-size: 13px;">
                        Email: <a href="mailto:services@teklysolutions.com" style="color: #10b981; text-decoration: none;">services@teklysolutions.com</a>
                      </p>
                      <p style="margin: 0; color: #9ca3af; font-size: 13px;">
                        © ${new Date().getFullYear()} TalentNest. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const clientHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to TalentNest</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f4f4f4;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  
                  <!-- Header with Logo -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
                      <div style="margin: 0 auto 22px; width: 130px; height: 130px; border-radius: 65px; background: #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 16px rgba(0,0,0,0.18);">
                        ${logoImgTag}
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">TalentNest</h1>
                      <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.95;">AI-Powered Talent Management Platform</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 26px;">Welcome, ${firstName}! 👋</h2>
                      
                      <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        Thank you for your interest in <strong>TalentNest</strong>! We're excited to help you transform your talent management process.
                      </p>

                      <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        Our team has received your request and will reach out to you shortly to discuss how we can help you:
                      </p>

                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px;">
                        <tr>
                          <td style="padding: 12px 0;">
                            <span style="color: #10b981; font-size: 20px; margin-right: 10px;">✓</span>
                            <span style="color: #374151; font-size: 15px;">Discover top talent with AI-powered matching</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0;">
                            <span style="color: #10b981; font-size: 20px; margin-right: 10px;">✓</span>
                            <span style="color: #374151; font-size: 15px;">Access real-time analytics and insights</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0;">
                            <span style="color: #10b981; font-size: 20px; margin-right: 10px;">✓</span>
                            <span style="color: #374151; font-size: 15px;">Build exceptional teams faster</span>
                          </td>
                        </tr>
                      </table>

                      <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 20px; border-radius: 4px; margin-bottom: 25px;">
                        <p style="margin: 0; color: #065f46; font-size: 14px; line-height: 1.6;">
                          <strong>What's Next?</strong><br>
                          Our team will contact you within 24 hours to schedule a personalized demo and answer any questions you may have.
                        </p>
                      </div>

                      <p style="margin: 0 0 10px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        In the meantime, feel free to reach out to us directly:
                      </p>
                      
                      <p style="margin: 0; color: #6b7280; font-size: 15px;">
                        📧 <a href="mailto:services@teklysolutions.com" style="color: #10b981; text-decoration: none;">services@teklysolutions.com</a>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 15px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
                        TalentNest
                      </p>
                      <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
                        AI-Powered Talent Management Platform
                      </p>
                      <p style="margin: 0 0 5px 0; color: #9ca3af; font-size: 13px;">
                        Email: <a href="mailto:services@teklysolutions.com" style="color: #10b981; text-decoration: none;">services@teklysolutions.com</a>
                      </p>
                      <p style="margin: 15px 0 0 0; color: #9ca3af; font-size: 12px;">
                        © ${new Date().getFullYear()} TalentNest. All rights reserved.
                      </p>
                      <p style="margin: 10px 0 0 0; color: #d1d5db; font-size: 11px;">
                        If you didn't request this email, you can safely ignore it.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    console.log("📤 Sending admin email...");
    // Send to admin
    const adminResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject,
      html: adminHtml,
      replyTo: email,
    });
    console.log("✅ Admin email sent:", adminResult);

    console.log("📤 Sending client email...");
    // Send confirmation to client
    // Note: With onboarding@resend.dev, emails can only go to the verified account
    // Once teklysolutions.com is fully verified, this will work for any recipient
    const clientResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: FROM_EMAIL.includes("resend.dev") ? [ADMIN_EMAIL] : [email], // Send to admin if using test domain
      subject: `Thanks for getting started with TalentNest${
        FROM_EMAIL.includes("resend.dev")
          ? " [TEST - Would send to: " + email + "]"
          : ""
      }`,
      html: clientHtml,
    });
    console.log("✅ Client email sent:", clientResult);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Email error:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
