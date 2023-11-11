import React, { FC, ReactElement, useMemo } from "react";

import { useFormContext } from "react-hook-form";

import {
  FormControl as ChakraFormControl,
  Flex,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Text,
} from "@chakra-ui/react";

export type FormControlPropsForFields = Omit<FormControlProps, "children">;

export interface FormControlProps {
  children: ReactElement<{ name?: string }>;
  helperText?: string;
  isRequired?: boolean;
  isOptional?: boolean;
  isInvalid?: boolean;
  label: string;
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
    <ChakraFormControl isRequired={isRequired} isInvalid={Boolean(errorFound) || isInvalid}>
      <Flex justifyContent="space-between" mb="1">
        <FormLabel cursor="pointer" mb="0" w="max-content" userSelect="none">
          {label}
        </FormLabel>
        {isOptional ? (
          <Text userSelect="none" as="span" color="gray.500" fontSize="sm">
            (opcional)
          </Text>
        ) : null}
      </Flex>
      {children}
      {errorFound ? (
        <FormErrorMessage mt="1.5">{errorFound}</FormErrorMessage>
      ) : helperText ? (
        <FormHelperText mt="1.5">{helperText}</FormHelperText>
      ) : null}
    </ChakraFormControl>
  );
};
