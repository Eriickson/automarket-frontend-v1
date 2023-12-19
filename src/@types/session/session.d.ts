declare module "@atmk/session" {
  export type Session = {
    tokens: SessionTokens;
    user: SessionUser;
    dealer: SessionDealer | null;
  };
}
