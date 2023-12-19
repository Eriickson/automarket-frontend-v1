export type ResetPasswordArgsType = {
  data: {
    newPassword: string;
    newPasswordConfirmation: string;
  };
  headers: {
    "x-password-reset-token": string;
  };
};

export type ResetPasswordReturnType = null;
