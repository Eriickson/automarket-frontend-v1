import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { useFormProvider } from "@/hooks/useFormProvider";

import { AccountTypeField } from "../EntityTypeField";

interface SelectAccountHolderProps extends FormComponentProps<any> {}

export const SelectAccountHolder: FC<SelectAccountHolderProps> = ({ onSubmit }) => {
  const { FormProvider } = useFormProvider<any>({});

  return (
    <FormProvider onSubmit={onSubmit}>
      <AccountTypeField />
    </FormProvider>
  );
};
