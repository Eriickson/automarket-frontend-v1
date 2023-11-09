import React, { FC } from "react";

import { SimpleTextField, SimpleTextFieldProps } from ".";

import { useFormContext } from "react-hook-form";

interface SimpleTextFieldControllerProps extends SimpleTextFieldProps {
  name: string;
}

export const SimpleTextFieldController: FC<SimpleTextFieldControllerProps> = ({ name, ...props }) => {
  const { register } = useFormContext();
  return <SimpleTextField {...register(name, { required: true })} {...props} />;
};
