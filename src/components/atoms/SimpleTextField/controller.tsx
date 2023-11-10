import React, { FC, useMemo } from "react";

import { Box, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { SimpleTextField, SimpleTextFieldProps } from ".";

interface SimpleTextFieldControllerProps extends SimpleTextFieldProps {
  name: string;
}

export const SimpleTextFieldController: FC<SimpleTextFieldControllerProps> = ({ name, ...props }) => {
  const { register, formState } = useFormContext();
  const errorData = formState.errors[name];

  const error = useMemo(() => errorData?.message as string | null, [errorData]);

  return (
    <Box>
      <SimpleTextField {...register(name)} {...props} />
      {error ? <Text color="red.500">{error}</Text> : null}
    </Box>
  );
};
