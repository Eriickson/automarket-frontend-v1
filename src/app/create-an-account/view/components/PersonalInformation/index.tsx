"use client";
import React from "react";

import delay from "delay";

import { PersonalInformationHolder } from "./PersonalInformationHolder";

export const PersonalInformationContainer = () => {
  return (
    <PersonalInformationHolder
      onSubmit={async (data) => {
        console.log(data);
        await delay(4000);
      }}
    />
  );
};
