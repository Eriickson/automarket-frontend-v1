import React from "react";

import { Box, HStack } from "@chakra-ui/react";

import { HeaderSession } from "@/app/legacy/home/components/header-session";

import { IndicatorItem } from "./IndicatorItem";

export const IndicatorsAndStatistics = () => {
  return (
    <Box>
      <HeaderSession title="Indicadores y Estadísticas" />
      <Box>
        <HStack flexWrap="wrap" spacing={["2", null, null, null, "3"]}>
          <IndicatorItem />
          <IndicatorItem />
          <IndicatorItem />
        </HStack>
      </Box>
    </Box>
  );
};
