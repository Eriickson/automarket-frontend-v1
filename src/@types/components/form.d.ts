declare module "@atmk/components" {
  export type FormComponentProps<T> = {
    id?: string;
    onSubmit: (values: T) => Promise<void>;
    defaultValues?: Partial<T>;
  };
}
