declare module "@atmk/components" {
  export type FormComponentProps<T> = {
    onSubmit: (values: T) => Promise<void>;
    defaultValues?: Partial<T>;
  };
}
