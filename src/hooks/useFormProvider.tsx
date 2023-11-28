import React, { useCallback } from "react";

import { Stack } from "@chakra-ui/react";

import { DefaultValues, FieldValues, FormProvider as ReactFormProvider, useForm, UseFormReturn } from "react-hook-form";

interface UseFormProviderArgs<T extends FieldValues> {
  id?: string;
  resolver?: any;
  defaultValues?: DefaultValues<T>;
  validateBeforeSubmit?(data: T, methods: UseFormReturn<T>): Promise<boolean> | boolean;
}

interface FormProviderProps<T> {
  children: React.ReactNode;
  onSubmit(data: T): Promise<void>;
}

export const useFormProvider = <T extends FieldValues>(args: UseFormProviderArgs<T> = {}) => {
  const methods = useForm<T>({
    resolver: args.resolver,
    defaultValues: args.defaultValues,
  });

  const FormProvider = useCallback(
    (props: FormProviderProps<T>) => {
      async function handleSubmit(data: T) {
        await props.onSubmit(data);
      }

      return (
        <ReactFormProvider {...methods}>
          <Stack as="form" onSubmit={methods.handleSubmit(handleSubmit)}>
            {props.children}
          </Stack>
        </ReactFormProvider>
      );
    },
    [methods]
  );

  return { FormProvider, methods };
};
