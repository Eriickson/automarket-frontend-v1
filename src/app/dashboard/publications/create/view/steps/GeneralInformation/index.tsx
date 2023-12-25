import React, { FC, useId } from "react";

import { Box, HStack, Stack } from "@chakra-ui/react";

import { Button } from "@/components/atoms";
import { WizardFormItemComponentProps } from "@/components/organisms/WizardForm";

import { GeneralInformationForm } from "./form";

interface GeneralInformationStepProps extends WizardFormItemComponentProps {}

export const GeneralInformationStep: FC<GeneralInformationStepProps> = ({ nextStep }) => {
  const formId = useId();

  async function handleSubmit(data: any) {
    console.log(data);
    nextStep();
  }

  return (
    <Box>
      <Stack>
        <Box>
          <GeneralInformationForm id={formId} onSubmit={handleSubmit} />
          {/* <Stack spacing="6">
            <SelectField options={[]} />
            <SelectField options={[]} />
            <SelectField options={[]} />
          </Stack> */}
        </Box>
        <HStack>
          <Button bgColor="gray.100" variant="ghost">
            Volver atrás
          </Button>
          <Button colorScheme="primary" form={formId} type="submit">
            Siguiente Paso
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
};
