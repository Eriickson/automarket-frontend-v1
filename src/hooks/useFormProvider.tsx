import React, { FC, useCallback } from "react";

import { Stack } from "@chakra-ui/react";

import { useForm, FormProvider as ReactFormProvider, DefaultValues, FieldValues } from "react-hook-form";

interface UseFormProviderArgs<T> {
  id?: string;
  resolver?: any;
  defaultValues?: DefaultValues<T>;
}

interface FormProviderProps<T> {
  children: React.ReactNode;
  onSubmit(data: T): void;
}

export const useFormProvider = <T extends FieldValues>(args: UseFormProviderArgs<T> = {}) => {
  const methods = useForm<T>({
    resolver: args.resolver,
    defaultValues: args.defaultValues,
  });

  const FormProvider = useCallback(
    (props: FormProviderProps<T>) => {
      return (
        <ReactFormProvider {...methods}>
          <Stack as="form" onSubmit={methods.handleSubmit(props.onSubmit)}>
            {props.children}
          </Stack>
        </ReactFormProvider>
      );
    },
    [methods]
  );

  return { FormProvider, methods };
};
