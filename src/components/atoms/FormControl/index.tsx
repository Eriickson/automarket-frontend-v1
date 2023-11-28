import React, { FC, ReactElement, useMemo } from "react";

import {
  Flex,
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Text,
} from "@chakra-ui/react";

import { useFormContext } from "react-hook-form";

export type FormControlPropsForFields = Omit<FormControlProps, "children">;

export interface FormControlProps {
  children: ReactElement<{ name?: string }>;
  helperText?: string;
  isRequired?: boolean;
  isOptional?: boolean;
  isInvalid?: boolean;
  label?: string;
  name?: string;
}

export const FormControl: FC<FormControlProps> = ({
  name: nameProp,
  children,
  helperText,
  isInvalid,
  isRequired,
  label,
  isOptional,
}) => {
  const name = nameProp || children.props.name;
  const formContext = useFormContext();

  const errorFound = useMemo(() => {
    if (!formContext || !name) return null;

    const error = formContext.formState.errors[name];

    if (error && typeof error.message === "string") return error.message;

    return null;
  }, [formContext, name]);

  return (
    <ChakraFormControl isInvalid={Boolean(errorFound) || isInvalid} isRequired={isRequired}>
      {label ? (
        <Flex justifyContent="space-between" mb="1">
          <FormLabel cursor="pointer" mb="0" userSelect="none" w="max-content">
            {label}
          </FormLabel>
          {isOptional ? (
            <Text as="span" color="gray.500" fontSize="sm" userSelect="none">
              (opcional)
            </Text>
          ) : null}
        </Flex>
      ) : null}
      {children}
      {errorFound ? (
        <FormErrorMessage mt="1.5">{errorFound}</FormErrorMessage>
      ) : helperText ? (
        <FormHelperText mt="1.5">{helperText}</FormHelperText>
      ) : null}
    </ChakraFormControl>
  );
};
