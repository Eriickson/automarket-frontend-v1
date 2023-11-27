declare module "@atmk/components" {
  export type FormComponentProps<T> = {
    onSubmit: (values: T) => void;
    defaultValues?: Partial<T>;
  };
}
