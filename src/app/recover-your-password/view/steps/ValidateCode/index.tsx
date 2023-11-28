import React from "react";

import { ValidateCodeForm } from "./form";

export const ValidateCode = () => {

  async function handleSubmit(data: any) {
    console.log(data);
  }

  return (
    <div>
      <ValidateCodeForm onSubmit={handleSubmit} />
    </div>
  );
};
