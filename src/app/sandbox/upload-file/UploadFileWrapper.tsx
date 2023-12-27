"use client";
import React, { FC, useCallback } from "react";

import { Box } from "@chakra-ui/react";

import { useDropzone } from "react-dropzone";

export type AcceptedFileTypes = "IMAGES" | "PDF" | "VIDEOS";

export const acceptedFileTypesMapper: Record<AcceptedFileTypes, any> = {
  IMAGES: { "images/*": [".png", ".jpg", ".jpeg", ".gif"] },
  PDF: { "application/pdf": [".pdf"] },
  VIDEOS: { "video/*": [".mp4", ".avi", ".mov"] },
};

interface UploadFileWrapperProps {
  maxFiles?: number;
  allowMultiple?: boolean;
  acceptedFileTypes?: AcceptedFileTypes[];
  onChanges?(nv: File[]): void;
  children: (props: { isDragActive: boolean }) => JSX.Element;
}

export const UploadFileWrapper: FC<UploadFileWrapperProps> = ({
  allowMultiple = true,
  maxFiles,
  children,
  onChanges,
  acceptedFileTypes,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChanges?.(acceptedFiles);
    },
    [onChanges]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: allowMultiple,
    onDrop,
    maxFiles,
    accept: (() => {
      const objectFilesToAccept = {};
      acceptedFileTypes?.forEach((fileType) => Object.assign(objectFilesToAccept, acceptedFileTypesMapper[fileType]));
      return objectFilesToAccept;
    })(),
  });

  return (
    <Box {...getRootProps()} w="max-content">
      <input {...getInputProps()} />
      {children({ isDragActive })}
    </Box>
  );
};
