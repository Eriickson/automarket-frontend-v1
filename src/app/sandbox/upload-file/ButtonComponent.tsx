"use client";
import React, { useState } from "react";

import { AspectRatio, Box, Button, HStack, Image, Text } from "@chakra-ui/react";

import { resizeFile } from "@/utils";

import { UploadFileWrapper } from "./UploadFileWrapper";

type ImageType = {
  src: string;
  size: string;
  quality: number;
};

export const ButtonComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [witoutResize, setWitoutResize] = useState<ImageType>();
  const [withResize, setWithResize] = useState<ImageType>();

  async function handleChange(nv: File[]) {
    setIsLoading(true);
    const { resizedFile, quality } = await resizeFile({ file: nv[0] });
    const url = URL.createObjectURL(resizedFile);

    setWitoutResize({ src: URL.createObjectURL(nv[0]), size: `${(nv[0].size / 1024).toFixed(1)} Kb`, quality: 100 });
    setWithResize({ src: url, size: `${(resizedFile.size / 1024).toFixed(1)} Kb`, quality });

    setIsLoading(false);
  }

  return (
    <Box>
      <HStack>
        <UploadFileWrapper allowMultiple={false} onChanges={handleChange}>
          {() => <Button>Upload file</Button>}
        </UploadFileWrapper>
        {isLoading ? <Text>loading...</Text> : null}
      </HStack>
      <HStack w="full">
        <Box w="8xl">
          <Text>Without resize</Text>
          <Text>{witoutResize?.size}</Text>
          <AspectRatio ratio={4 / 3}>
            <Image src={witoutResize?.src} />
          </AspectRatio>
        </Box>
        <Box w="8xl">
          <Text>with Resize - {withResize?.quality} </Text>
          <Text>{withResize?.size}</Text>
          <AspectRatio ratio={4 / 3}>
            <Image src={withResize?.src} />
          </AspectRatio>
        </Box>
      </HStack>
    </Box>
  );
};
