import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box } from "@chakra-ui/react";

import { useFormProvider } from "@/hooks/useFormProvider";

interface DetailsListingFormProps extends FormComponentProps<{}> {}

export const DetailsListingForm: FC<DetailsListingFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<DetailsListingFormProps>({ defaultValues, id /* , resolver */ });

  return (
    <FormProvider onSubmit={onSubmit}>
      <Box>GeneralInformationForm</Box>
    </FormProvider>
  );
};
