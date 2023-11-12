import React from "react";

import { FullScreenFormLayout } from "@/components/layouts/FullScreenForm";

const CreateAnAccountLayout = ({ children }: { children: React.ReactNode }) => {
  return <FullScreenFormLayout title="Crea tu cuenta">{children}</FullScreenFormLayout>;
};

export default CreateAnAccountLayout;
