import React, { FC } from "react";

import { useFormContext } from "react-hook-form";

import { PasswordField, PasswordFieldProps } from "./simple";
import { FormControl, FormControlPropsForFields } from "../FormControl";

interface PasswordFieldControllerProps extends PasswordFieldProps, FormControlPropsForFields {
  name: string;
}

export const PasswordFieldController: FC<PasswordFieldControllerProps> = ({ name, ...props }) => {
  const { register } = useFormContext();

  return (
    <FormControl {...props}>
      <PasswordField {...register(name)} {...props} />
    </FormControl>
  );
};

PasswordFieldController.displayName = "PasswordFieldController";
