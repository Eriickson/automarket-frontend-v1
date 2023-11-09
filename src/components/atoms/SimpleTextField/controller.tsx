import React, { FC } from "react";

import { FormHelperText, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { SimpleTextField, SimpleTextFieldProps } from ".";

interface SimpleTextFieldControllerProps extends SimpleTextFieldProps {
  name: string;
}

export const SimpleTextFieldController: FC<SimpleTextFieldControllerProps> = ({ name, ...props }) => {
  const { register, formState } = useFormContext();

  return (
    <>
      <SimpleTextField {...register(name)} {...props} />
      <Text color="red.500">{formState.errors[name]?.message?.toString()}</Text>
    </>
  );
};
