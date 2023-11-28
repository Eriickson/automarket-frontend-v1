import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Button, CodeVerificationFieldController } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { resolver, ValidateCodeFormType } from "./schema";

interface ValidateCodeFormProps extends FormComponentProps<ValidateCodeFormType> {}

export const ValidateCodeForm: FC<ValidateCodeFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<ValidateCodeFormType>({ defaultValues, resolver });

  return (
    <FormProvider onSubmit={onSubmit}>
      <CodeVerificationFieldController label="" name="passwordResetCode" />
      <Button colorScheme="primary" loadingText="Validando" mt="4" py="6" type="submit" w="full">
        Validar código de recuperación
      </Button>
    </FormProvider>
  );
};
