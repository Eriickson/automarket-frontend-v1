import React, { FC } from "react";

import { useFormContext } from "react-hook-form";

import { SimpleTextField, SimpleTextFieldProps } from "./simple";
import { FormControl, FormControlPropsForFields } from "../FormControl";

interface SimpleTextFieldControllerProps extends SimpleTextFieldProps, FormControlPropsForFields {
  name: string;
}

export const SimpleTextFieldController: FC<SimpleTextFieldControllerProps> = ({ name, ...props }) => {
  const { register, formState } = useFormContext();

  return (
    <FormControl {...props}>
      <SimpleTextField {...register(name)} {...props} />
    </FormControl>
  );
};
