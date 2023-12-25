import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Stack } from "@chakra-ui/react";

import { useFormProvider } from "@/hooks/useFormProvider";

import { FileUploadArea } from "./FileUploadArea";
import { UploadedFilesList } from "./UploadedFilesList";

interface ResourcesAndMultimediaFormProps extends FormComponentProps<{}> {}

export const ResourcesAndMultimediaForm: FC<ResourcesAndMultimediaFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<ResourcesAndMultimediaFormProps>({ defaultValues, id /* , resolver */ });

  return (
    <FormProvider onSubmit={onSubmit}>
      <Stack spacing="8">
        <FileUploadArea />
        <UploadedFilesList />
      </Stack>
    </FormProvider>
  );
};
