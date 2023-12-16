import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { SubmitButton } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { AccountTypeField } from "./EntityTypeField";
import { resolver, SelectAccountTypeFormType } from "./schema";

interface CreateAnAgencyFormProps extends FormComponentProps<SelectAccountTypeFormType> {}

export const SelectAccountTypeForm: FC<CreateAnAgencyFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<SelectAccountTypeFormType>({ defaultValues, resolver });

  return (
    <FormProvider onSubmit={onSubmit}>
      <AccountTypeField />
      <SubmitButton colorScheme="primary" mt="4">
        Seleccionar
      </SubmitButton>
    </FormProvider>
  );
};
