"use client";
import React from "react";

import { CreateAnAgencyHolder } from "./CreateAnAgencyHolder";

export const CreateAnAgencyContainer = () => {
  return (
    <CreateAnAgencyHolder
      onSubmit={async (data) => {
        console.log(data);
      }}
    />
  );
};
