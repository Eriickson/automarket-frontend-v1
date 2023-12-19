import { Session } from "@atmk/session";

export type RefreshTokenArgsType = {
  headers: {
    "x-refresh-token": string;
  };
};

export type RefreshTokenReturnType = {
  session: Session;
};
