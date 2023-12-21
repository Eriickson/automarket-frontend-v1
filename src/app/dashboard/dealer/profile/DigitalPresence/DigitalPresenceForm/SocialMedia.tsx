import React from "react";

import { Box, Image, Stack, TabPanel } from "@chakra-ui/react";

import { SimpleTextFieldController } from "@/components/atoms";

import { capitalCase } from "change-case";

const socialMediaItems = [
  { name: "facebook" },
  { name: "instagram" },
  { name: "linkedin" },
  { name: "tiktok" },
  { name: "x" },
  { name: "youtube" },
];

export const SocialMediaPanel = () => {
  return (
    <TabPanel>
      <Stack>
        {socialMediaItems.map((socialMediaItem) => (
          <Box key={socialMediaItem.name} pos="relative">
            <label htmlFor={socialMediaItem.name}>
              <Image
                alt=""
                bottom="2"
                cursor="pointer"
                left="0"
                pos="absolute"
                src={`/assets/social-medias/${socialMediaItem.name}.png`}
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
              id={socialMediaItem.name}
              name="facebookProfile"
              pl="8"
              placeholder={`Perfil de ${capitalCase(socialMediaItem.name)}`}
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
