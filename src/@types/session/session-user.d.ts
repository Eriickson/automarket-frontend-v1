declare module "@atmk/session" {
  export type SessionUser = {
    sub: string;
    fullName: string;
    profilePictureUrl: string | null;
    email: string;
  };
}
