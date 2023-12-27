"use client";
import React from "react";

import { Button } from "@chakra-ui/react";

import { UploadFileWrapper } from "./UploadFileWrapper";

export const ButtonComponent = () => {
  return (
    <UploadFileWrapper allowMultiple={false}>
      {({ isDragActive }) => (
        <Button>
          Upload file
          {isDragActive ? "true" : "false"}
        </Button>
      )}
    </UploadFileWrapper>
  );
};
