import React from "react";

import { EcommerceLayout } from "@/components/layouts/Ecommerce";

import { HomeView } from "./view";

const HomePage = () => {
  return (
    <EcommerceLayout>
      <HomeView />
    </EcommerceLayout>
  );
};

export default HomePage;
