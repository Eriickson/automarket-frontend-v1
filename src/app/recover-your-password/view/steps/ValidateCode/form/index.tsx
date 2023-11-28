import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Center } from "@chakra-ui/react";

import { Button, CodeVerificationFieldController } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

interface ValidateCodeFormProps extends FormComponentProps<any> {}

export const ValidateCodeForm: FC<ValidateCodeFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<any>({ defaultValues });

  return (
    <FormProvider onSubmit={onSubmit}>
      <CodeVerificationFieldController label="" name="invitationCode" />
      <Button colorScheme="primary" loadingText="Validando" mt="4" py="6" type="submit" w="full">
        Validar código de recuperación
      </Button>
    </FormProvider>
  );
};
