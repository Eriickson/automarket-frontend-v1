import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { getCookie, setCookie } from "cookies-next";

export async function GET(req: NextRequest) {
  const res = new NextResponse();
  const session = getCookie("automarket.session", { res, req, path: "/" });

  return NextResponse.json({
    status: "success",
    message: "GET session",
    session: session,
  });
}

export async function POST(req: NextRequest) {
  const session = await req.json();

  setCookie("automarket.session", JSON.stringify(session), { cookies, path: "/" });

  return NextResponse.json({
    status: "success",
    message: "POST session",
  });
}
