import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { deleteCookie, getCookie, setCookie } from "cookies-next";

export async function GET() {
  const session = getCookie("automarket.session", { cookies, path: "/" });

  const isSession = session !== undefined;

  if (!isSession) {
    return NextResponse.json({
      status: "error",
      message: "Sessión no encontrada",
    });
  }

  return NextResponse.json({
    status: "success",
    ...JSON.parse(session as string),
  });
}

export async function POST(req: NextRequest) {
  const session = await req.json();

  setCookie("automarket.session", JSON.stringify(session), { cookies, path: "/" });

  return NextResponse.json({
    status: "success",
  });
}

export async function DELETE() {
  deleteCookie("automarket.session", { cookies, path: "/" });

  return NextResponse.json({
    status: "success",
  });
}