import { Box, Button, HStack, Heading, PinInput, PinInputField, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CustomPinInputField = () => <PinInputField w="16" h="16" fontSize="xl" fontWeight="medium" />;

export const ValidateInvitationCodeStep = () => {
  return (
    <Box>
      <Box mb="8">
        <Heading as="h2" size="xl" fontWeight="semibold">
          Validar código de invitación
        </Heading>
        <Text>Ingresa el código de invitación que te enviamos a tu correo electrónico.</Text>
      </Box>
      <Stack spacing="4">
        <HStack>
          <PinInput otp>
            <CustomPinInputField />
            <CustomPinInputField />
            <CustomPinInputField />
            <CustomPinInputField />
            <Text fontSize="xl">-</Text>
            <CustomPinInputField />
            <CustomPinInputField />
            <CustomPinInputField />
            <CustomPinInputField />
          </PinInput>
        </HStack>
        <Button loadingText="Validando" py="6" w="full" color="white" bgColor="#165ef0">
          Validar código de invitación
        </Button>
      </Stack>
    </Box>
  );
};
