import React, { FC, useMemo } from "react";

import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { SimpleTextField, SimpleTextFieldProps } from ".";

interface SimpleTextFieldControllerProps extends SimpleTextFieldProps {
  name: string;
  helperText?: string;
}

export const SimpleTextFieldController: FC<SimpleTextFieldControllerProps> = ({ name, helperText, ...props }) => {
  const { register, formState } = useFormContext();
  const errorData = formState.errors[name];

  const error = useMemo(() => errorData?.message as string | null, [errorData]);

  return (
    <Box>
      <FormControl isRequired isInvalid={Boolean(error)}>
        <FormLabel mb="1.5">{props.label}</FormLabel>
        <SimpleTextField {...register(name)} {...props} />
        {error ? (
          <FormErrorMessage mt="1.5">{error ? error : null}</FormErrorMessage>
        ) : helperText ? (
          <FormHelperText mt="1.5">{helperText}</FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  );
};
