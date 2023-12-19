export type VerifyInvitationCodeArgsType = {
  queryParams: {
    email: string;
    code: string;
  };
};

export type VerifyInvitationCodeReturnType = {
  id: string;
  registrationToken: string;
};
