import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box } from "@chakra-ui/react";

import { useFormProvider } from "@/hooks/useFormProvider";

interface ResourcesAndMultimediaFormProps extends FormComponentProps<{}> {}

export const ResourcesAndMultimediaForm: FC<ResourcesAndMultimediaFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<ResourcesAndMultimediaFormProps>({ defaultValues, id /* , resolver */ });

  return (
    <FormProvider onSubmit={onSubmit}>
      <Box>GeneralInformationForm</Box>
    </FormProvider>
  );
};
