import React, { FC } from "react";

import { Box, HStack } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

interface ControllersStepProps {
  formId: string;
  onPrevStep(): void;
  disablePrevStep?: boolean;
}

export const ControllersStep: FC<ControllersStepProps> = ({ disablePrevStep, formId, onPrevStep }) => {
  return (
    <Box>
      <HStack>
        <Button
          bgColor="gray.100"
          isDisabled={disablePrevStep}
          variant="ghost"
          onClick={disablePrevStep ? undefined : onPrevStep}
        >
          Volver atrás
        </Button>
        <Button colorScheme="primary" form={formId} type="submit">
          Siguiente Paso
        </Button>
      </HStack>
    </Box>
  );
};
