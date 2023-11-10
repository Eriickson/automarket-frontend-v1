import { SimpleTextFieldController } from "@/components/atoms/SimpleTextField/controller";
import {
  AspectRatio,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
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
        <Heading as="h2" size="xl" fontWeight="semibold">
          Datos de la agencia
        </Heading>
        <Text>Estos serán los datos que aparecerán en tu perfil de agencia.</Text>
      </Box>
      <FormProvider {...methods}>
        <Stack as="form" onSubmit={methods.handleSubmit(handleSubmit)} spacing="4">
          <FormControl>
            <FormLabel mb="1">Logo</FormLabel>
            <HStack>
              <Box>
                <AspectRatio w="40" ratio={4 / 3}>
                  <Image
                    src="https://dmuvf4m79e02w.cloudfront.net/_1200x630_crop_center-center_82_none/ICON_Default_Social_Image_Template.jpg?mtime=1668894453 "
                    alt=""
                  />
                </AspectRatio>
              </Box>
            </HStack>
          </FormControl>
          <SimpleTextFieldController name="name" label="Nombre" placeholder="Ingresa el nombre de tu agencia" />
          <SimpleTextFieldController name="name" label="Eslogan" placeholder="Ingresa el eslogan" />
          <FormControl>
            <FormLabel mb="1">Provincia</FormLabel>
            <Input
              _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
              py="6"
              placeholder="Ingresa el provincia"
            />
          </FormControl>
          <HStack spacing="4">
            <FormControl>
              <FormLabel mb="1">Municipio</FormLabel>
              <Input
                _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
                py="6"
                placeholder="Ingresa el municipio"
              />
            </FormControl>
            <FormControl>
              <FormLabel mb="1">Sector</FormLabel>
              <Input
                _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
                py="6"
                placeholder="Ingresa el sector"
              />
            </FormControl>
          </HStack>
          <SimpleTextFieldController name="reference" label="Referencía" placeholder="Ingresa la referencia" />
          <Button py="6" w="full" color="white" bgColor="#165ef0">
            Validar datos de la agencia
          </Button>
        </Stack>
      </FormProvider>
    </Box>
  );
};
