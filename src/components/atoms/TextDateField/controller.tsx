import React, { FC } from "react";

import { Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { TextDateField, TextDateFieldProps } from ".";

interface TextDateFieldControllerProps extends TextDateFieldProps {
  name: string;
}

export const TextDateFieldController: FC<TextDateFieldControllerProps> = ({ name, ...props }) => {
  const { register, formState } = useFormContext();

  return (
    <>
      <TextDateField {...register(name)} {...props} />
      <Text color="red.500">{formState.errors[name]?.message?.toString()}</Text>
    </>
  );
};
