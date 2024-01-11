"use client";

import React, { FC } from "react";

import { FullScreenGalleryContextProvider, FullScreenGalleryContextProviderArgs } from "./context";
import { FullScreenGalleryModal } from "./FullScreenGalleryModal";

interface FullScreenGalleryProps extends Omit<FullScreenGalleryContextProviderArgs, "children"> {}

export const FullScreenGallery: FC<FullScreenGalleryProps> = ({ images }) => {
  return (
    <FullScreenGalleryContextProvider images={images}>
      <FullScreenGalleryModal />
    </FullScreenGalleryContextProvider>
  );
};
