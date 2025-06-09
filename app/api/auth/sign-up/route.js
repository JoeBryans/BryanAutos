import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SendVerificationMail } from "@/lib/mailer";

export async function POST(req) {
  const body = await req.json();
  const { email, password, firstname, lastname } = body;
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const verifyToken = generateOTP();
    const imageUrl = `https://avatar.iran.liara.run/username?username=${
      firstname + lastname
    }&size=200`;
    // const expiresAt = new Date();
    // expiresAt.setDate(expiresAt.getDate() + 1); // Expires in 1 day

    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        firstname: firstname,
        lastname: lastname,
        image: imageUrl,
        verificationCode: verifyToken,
        emailVerified: false,
      },
    });
    SendVerificationMail(email, firstname, verifyToken);

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}

function generateOTP() {
  const min = 100000; // Minimum 6-digit number
  const max = 999999; // Maximum 6-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
