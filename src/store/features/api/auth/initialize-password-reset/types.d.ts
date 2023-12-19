export type InitializePasswordResetArgsType = {
  data: {
    identifier: string;
    mode: "code";
  };
};

export type InitializePasswordResetReturnType = {
  identifier: string;
};
