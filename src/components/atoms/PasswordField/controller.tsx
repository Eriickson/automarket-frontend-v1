"use client";

import React, { FC } from "react";

import { useFormContext } from "react-hook-form";

import { FormControl, FormControlPropsForFields } from "../FormControl";
import { PasswordField, PasswordFieldProps } from "./simple";

interface PasswordFieldControllerProps extends PasswordFieldProps, FormControlPropsForFields {
  name: string;
}

export const PasswordFieldController: FC<PasswordFieldControllerProps> = ({ name, ...props }) => {
  const { register, formState } = useFormContext();

  return (
    <FormControl {...props}>
      <PasswordField isLoading={formState.isSubmitting} {...register(name)} {...props} />
    </FormControl>
  );
};

PasswordFieldController.displayName = "PasswordFieldController";
