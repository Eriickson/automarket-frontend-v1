import React from "react";

import { Box } from "@chakra-ui/react";

import { DashboardSessionTitle } from "../DashboardSessionTitle";

const SettingsPage = () => {
  return (
    <Box>
      <DashboardSessionTitle
        subtitle="Ajusta tu cuenta a tus necesidades con las configuraciones personalizadas para una mejor experiencia en la
        gestión de tu perfil y preferencias."
        title="Configuraciones"
      />
    </Box>
  );
};

export default SettingsPage;
