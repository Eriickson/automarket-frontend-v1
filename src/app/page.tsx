import React from "react";

import { AspectRatio, Box, Center, Flex, GridItem, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { GlobalFooter } from "@/components/organisms/GlobalFooter/GlobalFooter";
import { GlobalHeader } from "@/components/organisms/GlobalHeader";

import { ArrowRight } from "react-feather";

import { JoinOurPlatform } from "./JoinOurPlatform";

const vehicles = [
  "https://images.unsplash.com/photo-1610768207795-72169abdf0d4?q=80&w=6016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605756580041-21312e9fb2bc?q=80&w=4927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583695216122-35bb62c8b9cc?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1634737581963-5a22ba471961?q=80&w=3665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=3671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555941543-638fbc21f131?q=80&w=4800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const HomePage = () => {
  return (
    <Flex flexDirection="column" minH="100vh">
      <GlobalHeader />
      <Flex flex="1" flexDirection="column" justifyContent="space-between" py="4">
        <Center>
          <Box w="1600px">
            <SimpleGrid columnGap="6" columns={12} rowGap="2">
              <GridItem colSpan={12}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Box>
                    <Text fontSize="lg" fontWeight="semibold" lineHeight="1">
                      Vehículos Destacados
                    </Text>
                    <Text fontSize="sm">
                      Encuentra el vehículo que necesitas, en el lugar que lo necesitas. ¡No esperes más!
                    </Text>
                  </Box>
                  <HStack alignItems="center" spacing="1">
                    <Text fontSize="sm" fontWeight="medium">
                      Ver más
                    </Text>
                    <ArrowRight size="1rem" />
                  </HStack>
                </Flex>
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
          </Box>
        </Center>
        <JoinOurPlatform />
      </Flex>
      <GlobalFooter />
    </Flex>
  );
};

export default HomePage;
