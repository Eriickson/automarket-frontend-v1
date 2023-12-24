import React from "react";

import { AspectRatio, Box, GridItem, Image, SimpleGrid } from "@chakra-ui/react";

const AdvertisingPosters = [
  "https://www.volkswagen.co.in/app/site/subscribe/assets/images/Subscribe-banner-2022-desktop.jpg?v=2",
  "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/326428248/original/050647b1f9ec4c6c0309f1269366ad2ee94f9541/create-animated-html5-banner-ads.jpg",
  "https://d3lkjcm0ltcl22.cloudfront.net/visalia/images/hero-slider-banner.jpg?p=12",
  "https://exhibitorsearch.messefrankfurt.com/images/original/product_pictures/10000007202201/0010786350/1660220248648_Starterbatterien_LKW.jpg",
];

export const AdvertisingPostersSession = () => {
  return (
    <SimpleGrid columnGap="4" columns={12} rowGap="2">
      {AdvertisingPosters.map((AdvertisingPoster) => (
        <GridItem colSpan={3} key={AdvertisingPoster}>
          <AspectRatio ratio={16 / 9}>
            <Box cursor="pointer" rounded="md">
              <Image alt="" rounded="md" src={AdvertisingPoster} userSelect="none" w="full" />
            </Box>
          </AspectRatio>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
