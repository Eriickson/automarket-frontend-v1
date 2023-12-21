import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { useFormProvider } from "@/hooks/useFormProvider";

interface AddressFormProps extends FormComponentProps<any> {}

export const AddressForm: FC<AddressFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider, methods } = useFormProvider<any>({ defaultValues, /*  resolver, */ id });

  return (
    <FormProvider onSubmit={onSubmit}>
      <div>AddressForm</div>
    </FormProvider>
  );
};
