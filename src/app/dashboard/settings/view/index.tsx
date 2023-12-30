"use client";
import React from "react";

import { Box } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { SessionsSection } from "./components/sections/sessions";

export const SettingsDashboardView = () => {
  return (
    <Box mt="4">
      <ScreenAreaDelimiter withoutPadding>
        <SessionsSection />
      </ScreenAreaDelimiter>
    </Box>
  );
};
