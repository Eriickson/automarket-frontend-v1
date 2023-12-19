declare module "@atmk/types" {
  export type Response<T = void> = {
    message: string;
    status: "success" | "error";
    data: T;
    detail?: string;
  };

  export type ServiceResponse<T> = Response<T>;
}
