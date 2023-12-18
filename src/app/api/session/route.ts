import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { decryptData, encryptData } from "@/utils/encrypt/encrypt";

import { getCookie, setCookie } from "cookies-next";

export async function GET() {
  const session = getCookie("automarket.session", { cookies }) as any;
  const data = await decryptData({ encryptedData: session, secretPass: "123456" });

  return NextResponse.json({
    status: "success",
    message: "GET session",
    session: data,
  });
}

export async function POST(req: NextRequest) {
  const session = await req.json();

  const data = await encryptData({ payload: session, secretPass: "123456" });

  setCookie("automarket.session", data, { cookies });

  return NextResponse.json({
    status: "success",
    message: "POST session",
  });
}
