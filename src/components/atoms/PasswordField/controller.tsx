import React, { FC, useMemo } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { PasswordField, PasswordFieldProps } from ".";

interface PasswordFieldControllerProps extends PasswordFieldProps {
  name: string;
}

export const PasswordFieldController: FC<PasswordFieldControllerProps> = ({ name, ...props }) => {
  const { register, formState } = useFormContext();
  const errorData = formState.errors[name];

  const error = useMemo(() => errorData?.message as string | null, [errorData]);

  return (
    <Box w="full" pos="relative">
      <PasswordField {...register(name)} {...props} />
      {error ? <Text color="red.500">{error}</Text> : null}
    </Box>
  );
};

PasswordFieldController.displayName = "PasswordFieldController";
