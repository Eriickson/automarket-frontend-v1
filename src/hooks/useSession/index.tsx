import { useEffect, useState } from "react";

import { Session } from "@atmk/session";

import axios from "axios";

export const useSession = () => {
  const [session, setSession] = useState<Session | undefined>(undefined);


  async function signout() {
    axios.delete("/api/session").then(() => {
      setSession(undefined);
    });
  }

  useEffect(() => {
    axios.get("/api/session").then((response) => {
      setSession(response.data.session);
    });
  }, []);

  return { session, signout };
};
