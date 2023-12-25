import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box } from "@chakra-ui/react";

import { useFormProvider } from "@/hooks/useFormProvider";

interface ConfirmDataFormProps extends FormComponentProps<{}> {}

export const ConfirmDataForm: FC<ConfirmDataFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<ConfirmDataFormProps>({ defaultValues, id /* , resolver */ });

  return (
    <FormProvider onSubmit={onSubmit}>
      <Box>GeneralInformationForm</Box>
    </FormProvider>
  );
};
