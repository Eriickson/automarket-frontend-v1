import React, { FC } from "react";

import { AspectRatio, Box, Checkbox, GridItem, Image } from "@chakra-ui/react";

type UploadedFilesListItem = {
  url: string;
};

interface UploadedFilesListItemProps {
  item: UploadedFilesListItem;
}

export const UploadedFilesListItem: FC<UploadedFilesListItemProps> = ({ item }) => {
  return (
    <GridItem colSpan={2}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image rounded="md" src={item.url} />
        </AspectRatio>
        <Box bgColor="#00000017" cursor="pointer" inset="0" p="2" position="absolute">
          <Checkbox colorScheme="black" />
        </Box>
      </Box>
    </GridItem>
  );
};
