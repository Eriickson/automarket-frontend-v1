import React from "react";

import { AspectRatio, Box, GridItem, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { HeaderSession } from "@/app/home/components/header-session";

const vehicles = [
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=3690&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=5943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export const OtherPublications = () => {
  return (
    <Box>
      <SimpleGrid columnGap="4" columns={12} rowGap="2">
        <GridItem colSpan={12}>
          <HeaderSession
            description="Este vendedor tiene otras publicaciones que deberías ver"
            title="Otras Publicaciones"
          />
        </GridItem>
        {vehicles.map((item) => (
          <GridItem colSpan={3} key={item}>
            <Box>
              <Stack spacing="1">
                <Box pos="relative">
                  <AspectRatio ratio={16 / 9}>
                    <Box cursor="pointer" rounded="lg">
                      <Image alt="" rounded="lg" src={item} userSelect="none" />
                    </Box>
                  </AspectRatio>
                  <Box bgColor="#00000086" bottom="1.5" left="1.5" pos="absolute" px="1.5" py="0.5" rounded="md">
                    <Text color="white" fontSize="sm" userSelect="none">
                      RD$ 995,000
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Text fontWeight="semibold">Toyota Corolla - 2023</Text>
                </Box>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};
