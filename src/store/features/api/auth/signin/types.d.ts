import { Session } from "@atmk/session";

export type SigninArgsType = {
  data: {
    identifier: string;
    password: string;
  };
  headers: {
    "x-identity-token": string;
  };
};

export type SigninReturnType = {
  session: Session;
};
