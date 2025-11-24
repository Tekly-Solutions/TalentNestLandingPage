import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
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

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT || "587";
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const FROM_EMAIL =
      process.env.MAIL_FROM || "TalentNest <noreply@teklysolutions.com>";
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

    console.log("🔑 Config check:", {
      hasSmtpHost: !!SMTP_HOST,
      hasSmtpUser: !!SMTP_USER,
      hasSmtpPass: !!SMTP_PASS,
      fromEmail: FROM_EMAIL,
      adminEmail: ADMIN_EMAIL,
    });

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { success: false, error: "SMTP credentials not configured" },
        { status: 500 }
      );
    }
    if (!ADMIN_EMAIL) {
      return NextResponse.json(
        { success: false, error: "ADMIN_EMAIL not configured" },
        { status: 500 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Resolve local logo & embed as base64 data URI so email clients display it without external fetch.
    // If LOGO_URL env provided, prefer remote URL; else attempt to read from public folder.
    let LOGO_SRC = process.env.LOGO_URL || "";
    let EMBED_LOGO_DATA_URL: string | null = null;
    if (!LOGO_SRC) {
      try {
        const logoPath = path.join(
          process.cwd(),
          "public",
          "Talent Nest logo only.png"
        );
        const fileBuf = fs.readFileSync(logoPath);
        const b64 = fileBuf.toString("base64");
        EMBED_LOGO_DATA_URL = `data:image/png;base64,${b64}`;
      } catch (e) {
        console.warn(
          "Logo file not found or unreadable, falling back to text header.",
          e
        );
      }
    }
    const logoImgTag = EMBED_LOGO_DATA_URL
      ? `<img src="${EMBED_LOGO_DATA_URL}" alt="TalentNest Logo" style="max-width: 72%; max-height: 72%; display: block;" />`
      : LOGO_SRC
      ? `<img src="${LOGO_SRC}" alt="TalentNest Logo" style="max-width: 72%; max-height: 72%; display: block;" />`
      : "";

    const subject = `New TalentNest Demo Request Received – ${firstName} ${lastName}`;

    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New TalentNest Demo Request</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f4f4f4;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  
                  <!-- Header with Logo -->
                  <tr>
                    <td style="background: #ffffff; padding: 40px 40px 30px 40px; text-align: center; border-bottom: 3px solid #10b981;">
                      <div style="margin: 0 auto 20px; width: 100px; height: 100px; display: inline-block;">
                        ${logoImgTag}
                      </div>
                      <h1 style="margin: 0; color: #1f2937; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">TalentNest</h1>
                      <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 500;">Internal Notification System</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="margin: 0 0 10px 0; color: #1f2937; font-size: 22px; font-weight: bold;">Dear Team,</h2>
                      
                      <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        A new demo request has been submitted through the TalentNest Demo Request Form.<br>
                        Please review the details below and proceed with scheduling and preparation.
                      </p>

                      <h3 style="margin: 0 0 15px 0; color: #059669; font-size: 18px; font-weight: bold; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
                        Client Information
                      </h3>

                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
                        <tr>
                          <td style="padding: 10px 0;">
                            <strong style="color: #374151; font-size: 15px;">Name:</strong>
                            <span style="color: #1f2937; margin-left: 10px; font-size: 15px;">${firstName} ${lastName}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;">
                            <strong style="color: #374151; font-size: 15px;">Email Address:</strong>
                            <a href="mailto:${email}" style="color: #10b981; margin-left: 10px; text-decoration: none; font-size: 15px;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;">
                            <strong style="color: #374151; font-size: 15px;">Submitted:</strong>
                            <span style="color: #1f2937; margin-left: 10px; font-size: 15px;">${new Date().toLocaleString()}</span>
                          </td>
                        </tr>
                      </table>

                      <h3 style="margin: 0 0 15px 0; color: #059669; font-size: 18px; font-weight: bold; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
                        Next Steps
                      </h3>

                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px;">
                        <tr>
                          <td style="padding: 10px 0; padding-left: 5px;">
                            <span style="color: #10b981; font-size: 18px; margin-right: 12px;">✓</span>
                            <span style="color: #374151; font-size: 15px; line-height: 1.6;">Send a confirmation email to the client (use the formal version prepared).</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; padding-left: 5px;">
                            <span style="color: #10b981; font-size: 18px; margin-right: 12px;">✓</span>
                            <span style="color: #374151; font-size: 15px; line-height: 1.6;">Confirm demo availability and assign a team member to handle the session.</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; padding-left: 5px;">
                            <span style="color: #10b981; font-size: 18px; margin-right: 12px;">✓</span>
                            <span style="color: #374151; font-size: 15px; line-height: 1.6;">Prepare a personalized demo based on the client's requirements or notes.</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; padding-left: 5px;">
                            <span style="color: #10b981; font-size: 18px; margin-right: 12px;">✓</span>
                            <span style="color: #374151; font-size: 15px; line-height: 1.6;">Update CRM / Lead Management System with the client's details.</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; padding-left: 5px;">
                            <span style="color: #10b981; font-size: 18px; margin-right: 12px;">✓</span>
                            <span style="color: #374151; font-size: 15px; line-height: 1.6;">Follow up if no meeting date is selected in the form.</span>
                          </td>
                        </tr>
                      </table>

                      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 4px; margin-bottom: 25px;">
                        <p style="margin: 0; color: #92400e; font-size: 15px; line-height: 1.6;">
                          <strong>⚡ Important:</strong> Please ensure timely action so we can deliver a professional and responsive experience to the client.
                        </p>
                      </div>

                      <p style="margin: 0; color: #6b7280; font-size: 15px; line-height: 1.6;">
                        <strong>Regards,</strong><br>
                        TalentNest System Notification
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
          <title>Acknowledgment of Your TalentNest Demo Request</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f4f4f4;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="650" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  
                  <!-- Header with Logo -->
                  <tr>
                    <td style="background: #ffffff; padding: 45px 40px 35px 40px; text-align: center; border-bottom: 4px solid #10b981;">
                      <div style="margin: 0 auto 25px; width: 110px; height: 110px; display: inline-block;">
                        ${logoImgTag}
                      </div>
                      <h1 style="margin: 0; color: #1f2937; font-size: 36px; font-weight: 700; letter-spacing: -0.5px;">TalentNest</h1>
                      <p style="margin: 10px 0 0 0; color: #059669; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Enterprise Solutions Team</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 45px 40px;">
                      <h2 style="margin: 0 0 12px 0; color: #1f2937; font-size: 20px; font-weight: bold;">Dear ${firstName},</h2>
                      
                      <p style="margin: 0 0 22px 0; color: #374151; font-size: 15px; line-height: 1.7;">
                        We sincerely appreciate your interest in TalentNest and thank you for reaching out to request a product demonstration. TalentNest has been designed to meet the complex HR and operational needs of modern enterprises, and we look forward to presenting its capabilities to your team.
                      </p>

                      <p style="margin: 0 0 22px 0; color: #374151; font-size: 15px; line-height: 1.7;">
                        Our team will contact you shortly to schedule a meeting at your convenience and discuss the demonstration details.
                      </p>

                      <h3 style="margin: 0 0 18px 0; color: #059669; font-size: 17px; font-weight: bold; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
                        Demonstration Overview
                      </h3>

                      <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.7;">
                        During the session, our specialists will provide a comprehensive overview of the TalentNest platform, including but not limited to:
                      </p>

                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 6px; padding: 25px; margin-bottom: 25px;">
                        <tr>
                          <td style="padding: 10px 0;">
                            <span style="color: #10b981; font-size: 18px; margin-right: 12px;">●</span>
                            <span style="color: #374151; font-size: 15px; line-height: 1.6;">Enterprise-grade Attendance Management (Geofencing & Facial Recognition)</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;">
                            <span style="color: #10b981; font-size: 18px; margin-right: 12px;">●</span>
                            <span style="color: #374151; font-size: 15px; line-height: 1.6;">Advanced Role, Permission, and Compliance Management</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;">
                            <span style="color: #10b981; font-size: 18px; margin-right: 12px;">●</span>
                            <span style="color: #374151; font-size: 15px; line-height: 1.6;">Multi-Layer Organizational Hierarchy Configuration</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;">
                            <span style="color: #10b981; font-size: 18px; margin-right: 12px;">●</span>
                            <span style="color: #374151; font-size: 15px; line-height: 1.6;">Employee Self-Service Portal & Mobile Accessibility</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;">
                            <span style="color: #10b981; font-size: 18px; margin-right: 12px;">●</span>
                            <span style="color: #374151; font-size: 15px; line-height: 1.6;">Reporting, Audit Trails, and Data Governance Capabilities</span>
                          </td>
                        </tr>
                      </table>

                      <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 22px; border-radius: 4px; margin-bottom: 25px;">
                        <p style="margin: 0; color: #065f46; font-size: 14px; line-height: 1.7;">
                          <strong>Customized Demonstration:</strong> Should your organization have specific operational priorities or require focus on particular functional areas, please feel free to share these in advance. We will ensure that the demonstration is aligned with your strategic objectives and internal processes.
                        </p>
                      </div>

                      <p style="margin: 0 0 22px 0; color: #374151; font-size: 15px; line-height: 1.7;">
                        We look forward to engaging with your team and demonstrating how TalentNest can support your organization through automation, accuracy, and robust HR governance.
                      </p>

                      <p style="margin: 0 0 5px 0; color: #374151; font-size: 15px; line-height: 1.6;">
                        <strong>Kind regards,</strong>
                      </p>
                      <p style="margin: 0 0 3px 0; color: #374151; font-size: 15px;">
                        TalentNest Enterprise Solutions Team
                      </p>
                      <p style="margin: 0 0 3px 0; color: #6b7280; font-size: 14px;">
                        Email: <a href="mailto:services@teklysolutions.com" style="color: #10b981; text-decoration: none;">services@teklysolutions.com</a>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 30px 40px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 12px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
                        TalentNest
                      </p>
                      <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
                        Enterprise HR & Talent Management Solutions
                      </p>
                      <p style="margin: 0 0 5px 0; color: #9ca3af; font-size: 13px;">
                        Email: <a href="mailto:services@teklysolutions.com" style="color: #10b981; text-decoration: none;">services@teklysolutions.com</a>
                      </p>
                      <p style="margin: 15px 0 0 0; color: #9ca3af; font-size: 12px;">
                        © ${new Date().getFullYear()} TalentNest. All rights reserved.
                      </p>
                      <p style="margin: 10px 0 0 0; color: #d1d5db; font-size: 11px;">
                        This email was sent in response to your demo request. If you did not make this request, please disregard this message.
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
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject,
      html: adminHtml,
      replyTo: email,
    });
    console.log("✅ Admin email sent");

    console.log("📤 Sending client email...");
    // Send confirmation to client
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: email,
      subject: "Acknowledgment of Your TalentNest Demo Request",
      html: clientHtml,
    });
    console.log("✅ Client email sent");

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
