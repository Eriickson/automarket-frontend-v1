export type SigninArgsType = {
  data: {
    identifier: string;
    password: string;
  };
};

type SessionTokens = {
  accessToken: string;
  refreshToken: string;
};

type SessionUser = {
  sub: string;
  fullName: string;
  profilePictureUrl: string | null;
  email: string;
};

type SessionDealer = {
  name: string;
  slug: string;
  sub: string;
  logo: string | null;
};

type Session = {
  tokens: SessionTokens;
  user: SessionUser;
  dealer: SessionDealer;
};
export type SigninReturnType = {
  session: Session;
};
