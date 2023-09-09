import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req) {
  try {
    let token = req.cookies.get("token");

    let decodedString = await VerifyToken(token["value"]);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", decodedString["payload"]["email"]);

    return NextResponse.next({ request: { headers: requestHeaders } });
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
