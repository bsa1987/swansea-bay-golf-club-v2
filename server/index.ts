import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3001;
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const CLUB_EMAIL = process.env.CLUB_EMAIL || 'info@swanseabaygolfclub.co.uk';

const resend = new Resend(RESEND_API_KEY);

app.use(cors());
app.use(express.json());

// Serve built React app in production
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

const departmentLabels: Record<string, string> = {
  general: 'General Enquiry',
  tee_time: 'Tee Time Booking',
  membership: 'Membership',
  societies: 'Societies & Corporate',
  room_hire: 'Room Hire / Events',
  pro_shop: 'Pro Shop / Lessons',
};

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, department, message } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    department?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const deptLabel = departmentLabels[department || 'general'] ?? 'General Enquiry';

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
      <div style="background: #5a1020; padding: 24px 32px; text-align: center;">
        <h1 style="color: #c9a84c; font-size: 20px; letter-spacing: 0.15em; margin: 0; font-family: Georgia, serif;">
          SWANSEA BAY GOLF CLUB
        </h1>
        <p style="color: #e8c87a; font-size: 12px; letter-spacing: 0.3em; margin: 6px 0 0;">
          NEW WEBSITE ENQUIRY
        </p>
      </div>

      <div style="background: #fff; padding: 32px; border: 1px solid #e5e7eb; border-top: 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; width: 140px;">
              <span style="font-size: 11px; letter-spacing: 0.1em; color: #6b7280; text-transform: uppercase; font-weight: 600;">Subject</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
              <span style="color: #5a1020; font-weight: 600;">${deptLabel}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
              <span style="font-size: 11px; letter-spacing: 0.1em; color: #6b7280; text-transform: uppercase; font-weight: 600;">Name</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
              <span style="font-size: 11px; letter-spacing: 0.1em; color: #6b7280; text-transform: uppercase; font-weight: 600;">Email</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
              <a href="mailto:${email}" style="color: #5a1020;">${email}</a>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
              <span style="font-size: 11px; letter-spacing: 0.1em; color: #6b7280; text-transform: uppercase; font-weight: 600;">Phone</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${phone}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 10px 0; vertical-align: top;">
              <span style="font-size: 11px; letter-spacing: 0.1em; color: #6b7280; text-transform: uppercase; font-weight: 600;">Message</span>
            </td>
            <td style="padding: 10px 0;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </td>
          </tr>
        </table>
      </div>

      <div style="background: #f9fafb; padding: 16px 32px; text-align: center; border: 1px solid #e5e7eb; border-top: 0;">
        <p style="margin: 0; font-size: 11px; color: #9ca3af;">
          This enquiry was submitted via the Swansea Bay Golf Club website contact form.
        </p>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: 'Swansea Bay Golf Club <onboarding@resend.dev>',
      to: [CLUB_EMAIL],
      replyTo: email,
      subject: `[${deptLabel}] New enquiry from ${name}`,
      html: htmlBody,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email. Please try calling us directly.' });
  }
});

// Fallback: serve React app for all non-API routes
app.use((_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Swansea Bay Golf Club server running on port ${PORT}`);
});
