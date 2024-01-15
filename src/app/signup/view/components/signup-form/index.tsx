"use client";

import React from "react";

import { SignupHolder } from "./signup-form-holder";

export const SignupFormContainer = () => {
  return (
    <SignupHolder
      onSubmit={async (values) => {
        console.log(values);
      }}
    />
  );
};
