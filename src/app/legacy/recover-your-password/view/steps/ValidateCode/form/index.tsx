import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { CodeVerificationFieldController } from "@/components/atoms";
import { SubmitButton } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { resolver, ValidateCodeFormType } from "./schema";

interface ValidateCodeFormProps extends FormComponentProps<ValidateCodeFormType> {}

export const ValidateCodeForm: FC<ValidateCodeFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<ValidateCodeFormType>({ defaultValues, resolver });

  return (
    <FormProvider onSubmit={onSubmit}>
      <CodeVerificationFieldController label="" name="passwordResetCode" />
      <SubmitButton colorScheme="primary" loadingText="Validando código de recuperación..." mt="4">
        Validar código de recuperación
      </SubmitButton>
    </FormProvider>
  );
};
