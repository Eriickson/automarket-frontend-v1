"use client";

import React from "react";

import { Box } from "@chakra-ui/react";

import { SigninForm } from "./SigninForm";

const SigninPage = () => {
  return (
    <Box maxW="lg" w="full">
      <SigninForm />
    </Box>
  );
};

export default SigninPage;
