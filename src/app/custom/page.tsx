"use client";
import React, { useRef, useState } from "react";

import { Box, Button, HStack } from "@chakra-ui/react";

// import required modules
import { Navigation } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Swiper autoHeight modules={[Navigation]}>
        <SwiperSlide>
          <HStack>
            <Box>
              <Button onClick={() => setShow(!show)}>Show</Button>
            </Box>{" "}
            {show && (
              <Box bgColor="red" flex="1" h="64">
                Hi
              </Box>
            )}
          </HStack>
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
