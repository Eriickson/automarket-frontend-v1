import React, { FC } from "react";

import { Box, HStack, Stack } from "@chakra-ui/react";

import { Button } from "@/components/atoms";
import { SelectField } from "@/components/organisms";
import { WizardFormItemComponentProps } from "@/components/organisms/WizardForm";

interface GeneralInformationStepProps extends WizardFormItemComponentProps {}

export const GeneralInformationStep: FC<GeneralInformationStepProps> = () => {
  return (
    <Box maxW="2xl">
      <Stack>
        <Box>
          <Stack spacing="6">
            <SelectField options={[]} />
            <SelectField options={[]} />
            <SelectField options={[]} />
          </Stack>
        </Box>
        <HStack>
          <Button bgColor="gray.100" variant="ghost">
            Volver atrás
          </Button>
          <Button colorScheme="primary">Siguiente Apartado</Button>
        </HStack>
      </Stack>
    </Box>
  );
};
