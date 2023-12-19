declare module "@atmk/session" {
  export type SessionDealer = {
    name: string;
    slug: string;
    sub: string;
    logo: string | null;
  };
}
