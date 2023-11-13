declare module "@atmk/types" {
  export type Error = {
    message: string;
    code: string;
  };

  export type Response<T = void> = {
    message: string;
    status: "success" | "error";
    data?: T | null;
    errors?: Error[];
  };

  export type ServiceResponse<T> = Promise<Response<T> | null>;
}
