import { cookies } from "next/headers";

import { getCookie } from "cookies-next";

export async function getServerSession() {
  const response = getCookie("automarket.session", { cookies });

  return JSON.parse(response as string);
}
