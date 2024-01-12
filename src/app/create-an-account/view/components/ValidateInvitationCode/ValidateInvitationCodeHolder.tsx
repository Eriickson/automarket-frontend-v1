import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box } from "@chakra-ui/react";

import { CodeVerificationFieldController, SubmitButton } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { resolver, ValidateInvitationCodeValuesFormType } from "./schema";

interface ValidateInvitationCodeHolderProps extends FormComponentProps<ValidateInvitationCodeValuesFormType> {}

export const ValidateInvitationCodeHolder: FC<ValidateInvitationCodeHolderProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<ValidateInvitationCodeValuesFormType>({ resolver, defaultValues });

  return (
    <Box w="full">
      <FormProvider onSubmit={onSubmit}>
        <CodeVerificationFieldController label="" name="invitationCode" />
        <SubmitButton colorScheme="primary" loadingText="Validando código de invitación" mt="4">
          Validar código de invitación
        </SubmitButton>
      </FormProvider>
    </Box>
  );
};
