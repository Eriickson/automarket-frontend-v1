import { cookies } from "next/headers";

import { getCookie, setCookie } from "cookies-next";

export async function setSession(session: any) {
  setCookie("session", "session", { httpOnly: true });

  console.log("setSession", session);
}

export async function getServerSession() {
  const response = getCookie("automarket.session", { cookies });

  return { session: JSON.parse(response as string) };
}
