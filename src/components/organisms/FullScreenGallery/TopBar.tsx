import React, { FC } from "react";

import { HStack } from "@chakra-ui/react";

import { IconButton } from "@/components/atoms";

import { Grid, Maximize, Minimize, PlayCircle, X } from "react-feather";

import useFullScreenGalleryContext from "./context";

interface TopBarProps {}

export const TopBar: FC<TopBarProps> = () => {
  const { handleCloseGallery, isFullscreen, toggleFullscreen } = useFullScreenGalleryContext();
  return (
    <HStack color="white" justifyContent="flex-end">
      <IconButton colorScheme="whiteAlpha" size="xs" variant="ghost" onClick={toggleFullscreen}>
        {isFullscreen ? <Minimize size="1.1rem" /> : <Maximize size="1.1rem" />}
      </IconButton>
      <IconButton colorScheme="whiteAlpha" size="xs" variant="ghost">
        <Grid size="1.1rem" />
      </IconButton>
      <IconButton colorScheme="whiteAlpha" size="xs" variant="ghost">
        <PlayCircle size="1.2rem" />
      </IconButton>
      <IconButton colorScheme="whiteAlpha" size="xs" variant="ghost" onClick={handleCloseGallery}>
        <X size="1.25rem" />
      </IconButton>
    </HStack>
  );
};
