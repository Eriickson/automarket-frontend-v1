"use client";

import React from "react";

import { SelectAccountHolder } from "./SelectAccountTypeHolder";

export const SelectAccountTypeFormContainer = () => {
  return (
    <SelectAccountHolder
      onSubmit={async (data) => {
        console.log(data);
      }}
    />
  );
};
