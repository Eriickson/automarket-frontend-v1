import React from "react";

import { AspectRatio, Box, GridItem, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { HeaderSession } from "../../components/header-session";

const vehicles = [
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=3690&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=5943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1560253787-9c3babc1fab2?q=80&w=5970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export const RecentPostsSession = () => {
  return (
    <SimpleGrid columnGap={["1"]} columns={12} rowGap="2">
      <GridItem colSpan={12}>
        <HeaderSession
          description="Dale un vistazo a las publicaciones más recientes de nuestra plataforma."
          title="Publicaciones Recientes"
        />
      </GridItem>
      {vehicles.map((item) => (
        <GridItem colSpan={4} key={item}>
          <Box>
            <Stack spacing={["0.5"]}>
              <Box pos="relative">
                <AspectRatio ratio={16 / 9}>
                  <Box cursor="pointer" overflow="hidden">
                    <Image alt="" rounded="lg" src={item} userSelect="none" />
                  </Box>
                </AspectRatio>
                <Box
                  bgColor="#00000086"
                  bottom={["0.5", null, null, "1.5"]}
                  left={["0.5", null, null, "1.5"]}
                  pos="absolute"
                  px="1.5"
                  py="0.5"
                  rounded="sm"
                >
                  <Text color="white" fontSize={"2xs"} userSelect="none">
                    RD$ 995,000
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text fontSize={["2xs"]} fontWeight="semibold">
                  Toyota Corolla - 2023
                </Text>
              </Box>
            </Stack>
          </Box>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
