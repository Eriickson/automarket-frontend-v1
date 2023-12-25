"use client";
import React from "react";

import { Box, Stack, Text } from "@chakra-ui/react";

import { WizardForm } from "@/components/organisms/WizardForm";

import { GeneralInformationStep } from "./view/steps/GeneralInformation";
import { ResourcesAndMultimediaStep } from "./view/steps/ResourcesAndMultimedia";

const CreatePublicationPage = () => {
  return (
    <Box>
      <Stack>
        <Box>
          <Text fontSize="2xl">
            <b>Crear Publicación</b>
          </Text>
          <Text>
            En esta sección podrás crear una nueva publicación para tu empresa, recuerda que debes completar todos los
            campos para poder publicar.
          </Text>
        </Box>
        <WizardForm
          steps={[
            { component: GeneralInformationStep, title: "Información General" },
            { component: ResourcesAndMultimediaStep, title: "Recursos y Multimedia" },
          ]}
        />
      </Stack>
    </Box>
  );
};

export default CreatePublicationPage;
