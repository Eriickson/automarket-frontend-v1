import React from "react";

import {
  AspectRatio,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { SimpleTextFieldController } from "@/components/atoms/SimpleTextField/controller";

import { FormProvider, useForm } from "react-hook-form";
import { useSwiper } from "swiper/react";

export const CreateAnAgencyStep = () => {
  const swiperSlide = useSwiper();

  const methods = useForm();

  async function handleSubmit(values: any) {
    console.log(swiperSlide.slideNext());
  }

  return (
    <Box>
      <Box mb="8">
        <Heading as="h2" fontWeight="semibold" size="xl">
          Datos de la agencia
        </Heading>
        <Text>Estos serán los datos que aparecerán en tu perfil de agencia.</Text>
      </Box>
      <FormProvider {...methods}>
        <Stack as="form" spacing="4" onSubmit={methods.handleSubmit(handleSubmit)}>
          <FormControl>
            <FormLabel mb="1">Logo</FormLabel>
            <HStack>
              <Box>
                <AspectRatio ratio={4 / 3} w="40">
                  <Image
                    alt=""
                    src="https://dmuvf4m79e02w.cloudfront.net/_1200x630_crop_center-center_82_none/ICON_Default_Social_Image_Template.jpg?mtime=1668894453 "
                  />
                </AspectRatio>
              </Box>
            </HStack>
          </FormControl>
          <SimpleTextFieldController label="Nombre" name="name" placeholder="Ingresa el nombre de tu agencia" />
          <SimpleTextFieldController label="Eslogan" name="name" placeholder="Ingresa el eslogan" />
          <FormControl>
            <FormLabel mb="1">Provincia</FormLabel>
            <Input
              _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
              placeholder="Ingresa el provincia"
              py="6"
            />
          </FormControl>
          <HStack spacing="4">
            <FormControl>
              <FormLabel mb="1">Municipio</FormLabel>
              <Input
                _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
                placeholder="Ingresa el municipio"
                py="6"
              />
            </FormControl>
            <FormControl>
              <FormLabel mb="1">Sector</FormLabel>
              <Input
                _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
                placeholder="Ingresa el sector"
                py="6"
              />
            </FormControl>
          </HStack>
          <SimpleTextFieldController label="Referencía" name="reference" placeholder="Ingresa la referencia" />
          <Button colorScheme="primary" py="6" w="full">
            Validar datos de la agencia
          </Button>
        </Stack>
      </FormProvider>
    </Box>
  );
};
