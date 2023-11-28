import React, { FC } from "react";

import { useController } from "react-hook-form";

import { FormControl, FormControlPropsForFields } from "../FormControl";
import { CodeVerificationField, CodeVerificationFieldProps } from "./simple";

interface CodeVerificationFieldControllerProps extends CodeVerificationFieldProps, FormControlPropsForFields {
  name: string;
}

export const CodeVerificationFieldController: FC<CodeVerificationFieldControllerProps> = ({ name, ...props }) => {
  const { field, formState } = useController({ name });

  return (
    <FormControl {...props} name={name}>
      <CodeVerificationField
        isDisabled={formState.isSubmitting}
        {...props}
        value={field.value}
        onChange={field.onChange}
      />
    </FormControl>
  );
};
