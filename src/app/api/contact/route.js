export const runtime = "nodejs";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        let { name, email, subject, message, phone } = await req.json();
        name = name?.trim();
        email = email?.trim();
        subject = subject?.trim();
        message = message?.trim();
        phone = phone?.trim();

        // Validation
        if (!name || !email || !subject || !message || !phone) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: "All fields are required!",
                }),
                { status: 400 }
            );
        }

        if (!/^\d+$/.test(phone)) {
            return new Response(
                JSON.stringify({ success: false, error: "Phone number must contain only digits!" }),
                { status: 400 }
            );
        }

        if (phone.length < 10) {
            return new Response(
                JSON.stringify({ success: false, error: "Phone number must be at least 10 digits!" }),
                { status: 400 }
            );
        }

        // Debug logging
        console.log("SMTP_USER:", process.env.VITE_SMTP_USER);
        console.log("SMTP_PASS exists:", !!process.env.VITE_SMTP_PASS);
        console.log("RECEIVER_EMAIL:", process.env.VITE_RECEIVER_EMAIL);

        // Check if environment variables are set
        if (!process.env.VITE_SMTP_USER || !process.env.VITE_SMTP_PASS || !process.env.VITE_RECEIVER_EMAIL) {
            console.error("Missing environment variables!");
            return new Response(
                JSON.stringify({ 
                    success: false, 
                    error: "Server configuration error. Please try again later." 
                }),
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.VITE_SMTP_USER,
                pass: process.env.VITE_SMTP_PASS
            }
        });

        const mailOptions = {
            from: `"Two Prints" <${process.env.VITE_SMTP_USER}>`,
            to: process.env.VITE_RECEIVER_EMAIL,
            subject: `New Contact Form Submission: ${subject}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
            `,
            html: `
<div>
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
</div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
        
        return new Response(
            JSON.stringify({ success: true }),
            { status: 200 }
        );

    } catch (err) {
        console.error("Email send Error:", err);
        return new Response(
            JSON.stringify({ 
                success: false, 
                error: err.message 
            }),
            { status: 500 }
        );
    }
}