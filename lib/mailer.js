import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { VerifyMailTemplate } from "./mailTemplate";

export async function SendVerificationMail(email, name, verifyToken) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your generated App Password
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.GMAIL_EMAIL, // Sender address
      to: email, // Recipient address(es)
      subject: "verify your email", // Subject of the email
      // text: text, // Plain text body (optional if using HTML)
      html: VerifyMailTemplate.replace("{name}", name).replace(
        "{code}",
        verifyToken
      ),
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." });
  }
}
