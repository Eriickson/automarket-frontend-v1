import React from "react";

import { Button } from "@/components/atoms";

export const WhatsappButton = () => {
  const openInNewTab = () => {
    window.open("https://wa.link/b04ewh", "_blank", "noopener,noreferrer");
  };

  return (
    <Button colorScheme="green" onClick={openInNewTab}>
      Escribir al Whatsapp
    </Button>
  );
};
