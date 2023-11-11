"use client";

import React from "react";

import { Box } from "@chakra-ui/react";

import { SigninForm } from "./SigninForm";

const SigninPage = () => {
  return (
    <Box w="full" maxW="lg">
      <SigninForm />
    </Box>
  );
};

export default SigninPage;
