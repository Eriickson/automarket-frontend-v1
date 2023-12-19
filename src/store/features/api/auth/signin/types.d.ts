import { Session } from "@atmk/session";

export type SigninArgsType = {
  data: {
    identifier: string;
    password: string;
  };
};

export type SigninReturnType = {
  session: Session;
};
