import React, { FC } from "react";

import { useFormContext } from "react-hook-form";

import { FormControl, FormControlPropsForFields } from "../FormControl";
import { SimpleTextField, SimpleTextFieldProps } from "./simple";

interface SimpleTextFieldControllerProps extends SimpleTextFieldProps, FormControlPropsForFields {
  name: string;
}

export const SimpleTextFieldController: FC<SimpleTextFieldControllerProps> = ({ name, ...props }) => {
  const { register, formState } = useFormContext();

  return (
    <FormControl {...props}>
      <SimpleTextField isLoading={formState.isSubmitting} {...register(name)} {...props} />
    </FormControl>
  );
};
