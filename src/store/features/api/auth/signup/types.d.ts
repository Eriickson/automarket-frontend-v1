import { Session } from "@atmk/session";

export type SignupArgsType = {
  data: {
    fullname: string;
    birthdate: string;
    password: string;
    passwordConfirmation: string;
  };
  headers: {
    "x-registration-token": string;
  };
};

export type SignupReturnType = {
  session: Session;
};
