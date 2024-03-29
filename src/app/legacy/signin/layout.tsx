"use client";

import React from "react";

import { FullScreenFormLayout } from "@/components/layouts/FullScreen";

const SigninLayout = ({ children }: { children: React.ReactNode }) => {
  return <FullScreenFormLayout title="Ingresa a tu cuenta">{children}</FullScreenFormLayout>;
};

export default SigninLayout;
