export type VerifyPasswordResetRequestArgsType = {
  queryParams: {
    identifier: string;
    code: string;
  };
};

export type VerifyPasswordResetRequestReturnType = {
  data: {
    passwordResetToken: string;
  };
};
