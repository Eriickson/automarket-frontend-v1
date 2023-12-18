import { useEffect, useState } from "react";

import axios from "axios";

export const useSession = () => {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    axios.get("/api/session").then((response) => setSession(JSON.parse(response.data.session)));
  }, []);

  return { session };
};
