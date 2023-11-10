import React, { FC } from "react";

import { useController } from "react-hook-form";

import { CodeVerificationField, CodeVerificationFieldProps } from ".";

interface CodeVerificationFieldControllerProps extends CodeVerificationFieldProps {
  name: string;
}

export const CodeVerificationFieldController: FC<CodeVerificationFieldControllerProps> = ({ name, ...props }) => {
  const { field, formState } = useController({ name });

  return (
    <CodeVerificationField
      isDisabled={formState.isSubmitting}
      {...props}
      onChange={field.onChange}
      value={field.value}
    />
  );
};
