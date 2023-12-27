"use client";
import React, { FC, useCallback } from "react";

import { Box } from "@chakra-ui/react";

import { useDropzone } from "react-dropzone";

interface UploadFileWrapperProps {
  maxFiles?: number;
  onChanges?(nv: File[]): void;
  children: (props: { isDragActive: boolean }) => JSX.Element;
}

export const UploadFileWrapper: FC<UploadFileWrapperProps> = ({ maxFiles, children, onChanges }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChanges?.(acceptedFiles);
    },
    [onChanges]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, maxFiles });

  return (
    <Box {...getRootProps()} w="max-content">
      <input {...getInputProps()} />
      {children({ isDragActive })}
    </Box>
  );
};
