"use client";
import React, { useState } from "react";

import { AspectRatio, Box, Button, HStack, Image, Text } from "@chakra-ui/react";

import { resizeFile } from "@/utils";

import Resizer from "react-image-file-resizer";

import { UploadFileWrapper } from "./UploadFileWrapper";

type ImageType = {
  src: string;
  // MB
  size: string;
};

export const ButtonComponent = () => {
  const [witoutResize, setWitoutResize] = useState<ImageType>();
  const [withResize, setWithResize] = useState<ImageType>();

  async function handleChange(nv: File[]) {
    const response = await resizeFile(nv[0]);
    const url = URL.createObjectURL(response);

    setWitoutResize({
      src: URL.createObjectURL(nv[0]),
      size: `${(nv[0].size / 1024 / 1024).toFixed(2)} MB`,
    });

    setWithResize({
      src: url,
      size: `${(response.size / 1024 / 1024).toFixed(2)} MB`,
    });
  }

  return (
    <Box>
      <UploadFileWrapper allowMultiple={false} onChanges={handleChange}>
        {() => <Button>Upload file</Button>}
      </UploadFileWrapper>
      <HStack w="full">
        <Box w="8xl">
          <Text>Without resize</Text>
          <Text>{witoutResize?.size}</Text>
          <AspectRatio ratio={4 / 3}>
            <Image src={witoutResize?.src} />
          </AspectRatio>
        </Box>
        <Box w="8xl">
          <Text>with Resize</Text>
          <Text>{withResize?.size}</Text>
          <AspectRatio ratio={4 / 3}>
            <Image src={withResize?.src} />
          </AspectRatio>
        </Box>
      </HStack>
    </Box>
  );
};
