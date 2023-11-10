import React, { FC, ReactElement, useMemo } from "react";

import { FormControl as ChakraFormControl, FormErrorMessage, FormHelperText, FormLabel } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export type FormControlPropsForFields = Omit<FormControlProps, "children">;

export interface FormControlProps {
  children: ReactElement<{ name?: string }>;
  helperText?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  label: string;
}

export const FormControl: FC<FormControlProps> = ({ children, helperText, isInvalid, isRequired, label }) => {
  const name = children.props.name;
  const formContext = useFormContext();

  const errorFound = useMemo(() => {
    if (!formContext || !name) return null;

    const error = formContext.formState.errors[name];

    if (error && typeof error.message === "string") return error.message;

    return null;
  }, [formContext, name]);

  return (
    <ChakraFormControl isRequired={isRequired} isInvalid={Boolean(errorFound) || isInvalid}>
      <FormLabel mb="1.5">{label}</FormLabel>
      {children}
      {errorFound ? (
        <FormErrorMessage mt="1.5">{errorFound}</FormErrorMessage>
      ) : helperText ? (
        <FormHelperText mt="1.5">{helperText}</FormHelperText>
      ) : null}
    </ChakraFormControl>
  );
};
