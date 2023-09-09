import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  const jsonBody = await req.json();
  const { name, email, message } = jsonBody ?? {};
  let Transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //prepare mail
  let myEmail = {
    form: "Email from Ostad <info@teamrabbil.com>",
    to: email,
    text: `email from ${name}, - message : ${message}`,
  };

  try {
    await Transporter.sendMail(myEmail);
    return NextResponse.json({ status: "success" });
  } catch (error) {
    return NextResponse.json({ status: "failed" });
  }
}
