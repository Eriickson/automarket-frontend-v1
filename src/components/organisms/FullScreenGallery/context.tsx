"use client";

import { Context, createContext, RefObject, useContext, useEffect, useMemo, useRef, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

interface FullScreenGalleryContextProps {
  isOpen: boolean;
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
