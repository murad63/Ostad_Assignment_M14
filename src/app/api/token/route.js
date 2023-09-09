import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function GET() {
  const secret = new TextEncoder().encode(
    "Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP"
  );
  const payload = { email: "abc@email.com", user_id: "123" };
  let token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime("2h")
    .sign(secret);
  return NextResponse.json({ token: token });
}

export async function POST(req) {
  const jsonBody = await req.json();
  const token = jsonBody["token"];
  const secret = new TextEncoder().encode(
    "Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP"
  );
  const decode = await jwtVerify(token, secret);
  return NextResponse.json(decode);
}
