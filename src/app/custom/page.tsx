"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Box, Button, HStack } from "@chakra-ui/react";

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
              <Box h="64" bgColor="red" flex="1">
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
