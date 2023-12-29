import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { SimpleTextFieldController, SubmitButton } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { AddressFields } from "./AddressFields";
import { RegisterAgencyFormType, resolver } from "./schema";

interface CreateAnAgencyFormProps extends FormComponentProps<RegisterAgencyFormType> {}
export const CreateAnAgencyForm: FC<CreateAnAgencyFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<RegisterAgencyFormType>({ resolver, defaultValues });

  return (
    <FormProvider onSubmit={onSubmit}>
      <SimpleTextFieldController isRequired label="Nombre" name="name" placeholder="Ingresa el nombre de tu agencia" />
      <SimpleTextFieldController isRequired label="Eslogan" name="slogan" placeholder="Ingresa el eslogan" />
      <AddressFields />
      <SubmitButton colorScheme="primary" mt="4">
        Validar datos de la agencia
      </SubmitButton>
    </FormProvider>
  );
};
