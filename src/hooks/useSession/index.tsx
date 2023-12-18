import { useEffect, useState } from "react";

import axios from "axios";

export const useSession = () => {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    axios.get("/api/session").then((response) => setSession(response.data.session));
  }, []);

  return { session };
};
