import { setCookie } from "cookies-next";

import { encryptData } from "../encrypt/encrypt";

export async function setSession(session: any) {
  setCookie("session", "session", { httpOnly: true });

  console.log("setSession", session);
}
