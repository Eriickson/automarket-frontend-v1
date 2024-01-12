import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { SimpleTextFieldController, SubmitButton } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { AddressFields } from "./AddressFields";
import { CreateAnAgencyFormValuesType, resolver } from "./schema";

interface CreateAnAgencyHolderProps extends FormComponentProps<CreateAnAgencyFormValuesType> {}

export const CreateAnAgencyHolder: FC<CreateAnAgencyHolderProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<CreateAnAgencyFormValuesType>({ resolver, defaultValues });

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
