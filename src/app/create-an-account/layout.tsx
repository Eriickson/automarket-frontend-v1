import { FullScreenFormLayout } from "@/components/layouts/FullScreenForm";
import React from "react";

const CreateAnAccountLayout = ({ children }: { children: React.ReactNode }) => {
  return <FullScreenFormLayout title="Crea tu cuenta">{children}</FullScreenFormLayout>;
};

export default CreateAnAccountLayout;
