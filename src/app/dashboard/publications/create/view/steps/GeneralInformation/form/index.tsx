import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box } from "@chakra-ui/react";

import { useFormProvider } from "@/hooks/useFormProvider";

interface GeneralInformationFormProps extends FormComponentProps<{}> {}

export const GeneralInformationForm: FC<GeneralInformationFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<GeneralInformationFormProps>({ defaultValues, id /* , resolver */ });

  return (
    <FormProvider onSubmit={onSubmit}>
      <Box>GeneralInformationForm</Box>
    </FormProvider>
  );
};
