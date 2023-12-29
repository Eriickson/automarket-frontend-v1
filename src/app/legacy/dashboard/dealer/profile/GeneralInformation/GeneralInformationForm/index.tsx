import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { SimpleTextFieldController } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { GeneralInformationFormValuesType, resolver } from "./schema";

interface GeneralInformationFormProps extends FormComponentProps<GeneralInformationFormValuesType> {}

export const GeneralInformationForm: FC<GeneralInformationFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<GeneralInformationFormValuesType>({ defaultValues, resolver, id });

  return (
    <FormProvider onSubmit={onSubmit}>
      <SimpleTextFieldController label="Nombre del Distribuidor" name="name" />
      <SimpleTextFieldController label="Eslogan" name="slogan" />
      <SimpleTextFieldController label="Descripción" name="description" />
    </FormProvider>
  );
};
