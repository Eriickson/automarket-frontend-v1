import React from "react";

import { Box, Image, Stack, TabPanel } from "@chakra-ui/react";

import { SimpleTextFieldController } from "@/components/atoms";

import { capitalCase } from "change-case";

const messagingServicesItems = [
  { name: "messenger" },
  { name: "snapchat" },
  { name: "telegram" },
  { name: "whatsapp" },
];

export const MessagingServicesPanel = () => {
  return (
    <TabPanel>
      <Stack>
        {messagingServicesItems.map((messagingServiceItem) => (
          <Box key={messagingServiceItem.name} pos="relative">
            <label htmlFor={messagingServiceItem.name}>
              <Image
                alt=""
                bottom="2"
                cursor="pointer"
                left="0"
                pos="absolute"
                src={`/assets/messaging-services/${messagingServiceItem.name}.png`}
                userSelect="none"
                w="6"
                zIndex="2"
              />
            </label>
            <SimpleTextFieldController
              _focus={{ ring: 0 }}
              border="0"
              borderBottom="2px"
              fontSize="sm"
              fontWeight="medium"
              id={messagingServiceItem.name}
              name="facebookProfile"
              pl="8"
              placeholder={`Perfil de ${capitalCase(messagingServiceItem.name)}`}
              px="0"
              py="1"
              w="sm"
            />
          </Box>
        ))}
      </Stack>
    </TabPanel>
  );
};
