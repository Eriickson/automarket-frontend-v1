import React, { FC } from "react";

import { HStack, PinInput, PinInputField as ChakraPinInputField, Text } from "@chakra-ui/react";

const CustomPinInputField = () => (
  <ChakraPinInputField
    _focus={{ border: "1px solid", borderColor: "primary.500", ring: "1.5", ringColor: "primary.500" }}
    _placeholder={{ color: "gray.300" }}
    border="1px solid"
    borderColor="gray.200"
    fontSize="lg"
    fontWeight="medium"
    h="14"
    outline="none"
    rounded="sm"
    textAlign="center"
    transition="150ms"
    w="14"
  />
);

export interface CodeVerificationFieldProps {
  value?: string;
  isDisabled?: boolean;
  onChange?(value: string): void;
}

export const CodeVerificationField: FC<CodeVerificationFieldProps> = ({ isDisabled, onChange, value }) => {
  return (
    <HStack id="hola-a-todos" justifyContent="center" w="full">
      <PinInput otp isDisabled={isDisabled} placeholder="●" value={value} onChange={onChange}>
        <CustomPinInputField />
        <CustomPinInputField />
        <CustomPinInputField />
        <Text fontSize="xl">-</Text>
        <CustomPinInputField />
        <CustomPinInputField />
        <CustomPinInputField />
      </PinInput>
    </HStack>
  );
};
