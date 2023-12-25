import React from "react";

import { SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { UploadedFilesListItem } from "./Item";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg/1200px-Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg",
  "https://gaadiwaadi.com/wp-content/uploads/2017/06/2018-Honda-Accord-India-Launch-Specs-Features-740x494.jpg",
  "https://cdn.autopapo.com.br/box/uploads/2021/04/09115750/honda-accord-hibrido-branco-de-frente-na-estrada.jpg",
  "https://images.carexpert.com.au/app/uploads/2021/12/211105_Honda-Accord_HERO.jpg",
  "https://avatars.mds.yandex.net/get-autoru-vos/5620341/2fd606f14cf615d1d3264d644df234bc/456x342n",
  "https://images2.thanhnien.vn/528068263637045248/2023/5/31/edit-honda-accord-2020-3-1685509392888391131483.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg/1200px-Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg",
  "https://gaadiwaadi.com/wp-content/uploads/2017/06/2018-Honda-Accord-India-Launch-Specs-Features-740x494.jpg",
  "https://cdn.autopapo.com.br/box/uploads/2021/04/09115750/honda-accord-hibrido-branco-de-frente-na-estrada.jpg",
  "https://images.carexpert.com.au/app/uploads/2021/12/211105_Honda-Accord_HERO.jpg",
  "https://avatars.mds.yandex.net/get-autoru-vos/5620341/2fd606f14cf615d1d3264d644df234bc/456x342n",
  "https://images2.thanhnien.vn/528068263637045248/2023/5/31/edit-honda-accord-2020-3-1685509392888391131483.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg/1200px-Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg",
  "https://gaadiwaadi.com/wp-content/uploads/2017/06/2018-Honda-Accord-India-Launch-Specs-Features-740x494.jpg",
  "https://cdn.autopapo.com.br/box/uploads/2021/04/09115750/honda-accord-hibrido-branco-de-frente-na-estrada.jpg",
  "https://images.carexpert.com.au/app/uploads/2021/12/211105_Honda-Accord_HERO.jpg",
  "https://avatars.mds.yandex.net/get-autoru-vos/5620341/2fd606f14cf615d1d3264d644df234bc/456x342n",
  "https://images2.thanhnien.vn/528068263637045248/2023/5/31/edit-honda-accord-2020-3-1685509392888391131483.png",
];

export const UploadedFilesList = () => {
  return (
    <Stack>
      <Text fontSize="xl" fontWeight="medium">
        Listado de archivos subidos
      </Text>
      <SimpleGrid columns={12} gap="2.5">
        {images.map((url) => (
          <UploadedFilesListItem item={{ url }} key={url} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
