"use client";
import React, { useState } from "react";

import { AspectRatio, Box, Image } from "@chakra-ui/react";

import Zoom from "react-medium-image-zoom";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "react-medium-image-zoom/dist/styles.css";
import "swiper/css";
import { BottomSwiper } from "./BottomSwiper";

const items = [
  "https://img.supercarros.com/AdsPhotos/1024x768/0/11239624.jpg?wmo=567f2dfe839b0af3b0bb66c762e489549397b58d80648be77b2c90dc6ea8e58fe389916d560c9b065275c327fe8d7cfc9092aea7097dd32ee2b47dd5f86260f2",
  "https://acnews.blob.core.windows.net/imgnews/large/NAZ_40eab4bec7b34781a5781410e13d90aa.jpg",
  "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_hewmdj22/def_height/2700/def_width/2700/version/100012/type/1",
  "https://st1.uvnimg.com/c7/ed/e383da564350acf58db43d7ea27c/Screen%2520Shot%25202016-01-22%2520at%25207.54.56%2520PM.png",
  "https://media.ed.edmunds-media.com/honda/civic/2016/fe/2016_honda_civic_r34_fe_1106151_717.jpg",
  "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/15q4/662479/2016-honda-civic-sedan-15l-turbo-test-review-car-and-driver-photo-662799-s-original.jpg?fill=2:1&resize=1200:*",
  "https://www.dowhonda.com/wp-content/uploads/2016/11/2017-Honda-Civic-Touring-1920x1045.jpg",
];

export const ThumbsSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | undefined>(undefined);
  return (
    <Box>
      <Box mb="1">
        <Swiper modules={[Thumbs]} spaceBetween={6} thumbs={{ swiper: thumbsSwiper }}>
          {items.map((item) => (
            <SwiperSlide key={item}>
              <Zoom>
                <AspectRatio overflow="hidden" ratio={16 / 9} rounded="sm">
                  <Image alt="" src={item} />
                </AspectRatio>
              </Zoom>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box backgroundColor="secondary.500" p="1" rounded="sm">
        <BottomSwiper items={items} setThumbsSwiper={setThumbsSwiper} />
      </Box>
    </Box>
  );
};
