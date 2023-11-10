import React, { FC } from "react";

import { HStack, PinInput, PinInputField as ChakraPinInputField, Text } from "@chakra-ui/react";

const CustomPinInputField = () => (
  <ChakraPinInputField
    textAlign="center"
    w="16"
    h="16"
    fontSize="xl"
    fontWeight="medium"
    border="1px solid"
    outline="none"
    borderColor="gray.200"
    _focus={{ border: "1px solid", borderColor: "primary.500", ring: "1.5", ringColor: "primary.500" }}
    rounded="sm"
    transition="150ms"
    _placeholder={{ color: "gray.300" }}
  />
);

export interface CodeVerificationFieldProps {
  value?: string;
  isDisabled?: boolean;
  onChange?(value: string): void;
}

export const CodeVerificationField: FC<CodeVerificationFieldProps> = ({ isDisabled, onChange, value }) => {
  return (
    <HStack justifyContent="center">
      <PinInput placeholder="●" isDisabled={isDisabled} value={value} onChange={onChange} otp>
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
