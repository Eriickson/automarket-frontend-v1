import React from "react";

import { EnterYourPasswordForm } from "./form";

export const EnterYourNewPassword = () => {

  async function handleSubmit(data: any) {
    console.log(data);
  }

  return (
    <div>
      <EnterYourPasswordForm onSubmit={handleSubmit} />
    </div>
  );
};
