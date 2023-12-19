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
