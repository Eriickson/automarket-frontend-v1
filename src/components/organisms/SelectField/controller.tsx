import React, { FC } from "react";

import { FormControl, FormControlPropsForFields } from "@/components/atoms";

import { useController } from "react-hook-form";

import { SelectField, SelectFieldProps } from "./simple";

interface SelectFieldControllerProps extends SelectFieldProps, FormControlPropsForFields {
  name: string;
}

export const SelectFieldController: FC<SelectFieldControllerProps> = ({ name, ...props }) => {
  const { field, formState } = useController({ name });

  return (
    <FormControl {...props} name={name}>
      <SelectField isDisabled={formState.isSubmitting} {...props} value={field.value} onChange={field.onChange} />
    </FormControl>
  );
};
