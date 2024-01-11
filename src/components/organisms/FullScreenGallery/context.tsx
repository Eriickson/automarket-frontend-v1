"use client";

import { Context, createContext, useContext, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import { SwiperClass } from "swiper/react";

interface FullScreenGalleryContextProps {
  isOpen: boolean;
  thumbsSwiper?: SwiperClass;
  setThumbsSwiper?(swiper: SwiperClass): void;
  isFullscreen: boolean;
  images: string[];
  onClose(): void;
  toggleFullscreen(): void;
  handleCloseGallery(): void;
}

export const FullScreenGalleryContext = createContext<FullScreenGalleryContextProps | undefined>(
  undefined
) as Context<FullScreenGalleryContextProps>;

export interface FullScreenGalleryContextProviderArgs {
  children: React.ReactNode;
  images: string[];
}

export const FullScreenGalleryContextProvider = ({ children, images }: FullScreenGalleryContextProviderArgs) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | undefined>(undefined);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  function handleCloseGallery() {
    document.exitFullscreen();
    onClose();
  }

  return (
    <FullScreenGalleryContext.Provider
      value={{
        isOpen,
        isFullscreen,
        images,
        thumbsSwiper,
        setThumbsSwiper,
        onClose,
        toggleFullscreen,
        handleCloseGallery,
      }}
    >
      {children}
    </FullScreenGalleryContext.Provider>
  );
};

const useFullScreenGalleryContext = () => {
  const context = useContext(FullScreenGalleryContext);

  if (context === undefined) {
    throw new Error("useFullScreenGalleryContext must be used within a FullScreenGalleryContextProvider");
  }

  return context;
};

export default useFullScreenGalleryContext;
