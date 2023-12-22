import React from "react";

import { Box, Image, Stack } from "@chakra-ui/react";

import { ItemInfo } from "./ItemInfo";

export const ActiveSessionItem = () => {
  return (
    <Box>
      <Stack border="1px" borderColor="gray.300" p="4" rounded="md" w="max-content">
        <ItemInfo
          icon={<Image alt="icon" boxSize="5" src="https://cdn-icons-png.flaticon.com/512/25/25345.png" />}
          label="Dispositivo"
          value="Mackbook"
        />
        <ItemInfo
          icon={<Image alt="icon" boxSize="5" src="https://cdn-icons-png.flaticon.com/512/888/888846.png" />}
          label="Navegador"
          value="Chrome"
        />
        <ItemInfo
          icon={<Image alt="icon" boxSize="5" src="https://cdn-icons-png.flaticon.com/512/535/535188.png" />}
          label="Ubicación"
          value="Santiago de los Caballeros, Rep. Dom."
        />
      </Stack>
    </Box>
  );
};
