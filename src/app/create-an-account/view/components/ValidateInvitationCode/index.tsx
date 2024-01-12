"use client";

import React from "react";

import { ValidateInvitationCodeHolder } from "./ValidateInvitationCodeHolder";

export const ValidateInvitationContainer = () => {
  return (
    <ValidateInvitationCodeHolder
      onSubmit={async (data) => {
        console.log(data);
      }}
    />
  );
};
