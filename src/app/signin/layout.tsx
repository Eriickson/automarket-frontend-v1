import { FullScreenFormLayout } from "@/components/layouts/FullScreenForm";
import React from "react";

const SigninLayout = ({ children }: { children: React.ReactNode }) => {
  return <FullScreenFormLayout title="Ingresa a tu cuenta">{children}</FullScreenFormLayout>;
};

export default SigninLayout;
