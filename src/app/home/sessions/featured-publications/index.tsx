import React from "react";

import { AspectRatio, Box, GridItem, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { HeaderSession } from "../../components/header-session";

const vehicles = [
  "https://images.unsplash.com/photo-1610768207795-72169abdf0d4?q=80&w=6016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605756580041-21312e9fb2bc?q=80&w=4927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583695216122-35bb62c8b9cc?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1634737581963-5a22ba471961?q=80&w=3665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=3671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555941543-638fbc21f131?q=80&w=4800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const FeaturedPublicationsSession = () => {
  return (
    <SimpleGrid columnGap="6" columns={12} rowGap="2">
      <GridItem colSpan={12}>
        <HeaderSession
          description="Encuentra el vehículo que necesitas, en el lugar que lo necesitas. ¡No esperes más!"
          title="Vehículos Destacados"
        />
      </GridItem>
      {vehicles.map((item) => (
        <GridItem colSpan={2} key={item}>
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
  );
};
