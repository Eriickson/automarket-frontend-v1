import React from "react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { SendInvitationFormContainer } from "./components/send-invitation";

export const SendInvitationView = () => {
  return (
    <ScreenAreaDelimiter maxWidth="480">
      <SendInvitationFormContainer />
    </ScreenAreaDelimiter>
  );
};
