"use client";
import React, { useState } from "react";

import { Box, Stack, Text } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

export const GeneralDescriptionSession = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Stack spacing="0.5">
      <Text fontSize={["md", null, null, "xl"]} fontWeight={["semibold"]}>
        Descripción de la publicación
      </Text>
      <Box h={showMore ? undefined : "14"} mb="1" overflow="hidden">
        <Text color="gray.500" fontSize={["xs", null, null, "sm"]} lineHeight="1.2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sunt labore quas illum atque? Inventore
          eum repellat dolorum iusto minus veniam officiis error nobis, voluptatibus quibusdam aspernatur, molestiae
          laboriosam provident aut? Deleniti voluptates veritatis culpa ex omnis corrupti velit perferendis dicta vel
          veniam? Voluptatum, earum. Tempora voluptates deserunt quisquam voluptate consequatur ab voluptatibus aliquam
          accusamus? Necessitatibus sunt reiciendis accusantium autem consequatur qui itaque consequuntur ex fugiat amet
          nihil unde dolor expedita reprehenderit, iusto tempora officiis dolore assumenda est fugit adipisci
          perspiciatis ullam! Delectus sed velit quisquam nisi fugit, quidem animi asperiores praesentium optio nihil
          omnis ea dolor, illum, sunt saepe officia necessitatibus! Dolore nisi deserunt.
        </Text>
      </Box>
      <Button py="3.5" size="xs" variant="ghost" onClick={() => setShowMore(!showMore)}>
        Mostrar más
      </Button>
    </Stack>
  );
};
