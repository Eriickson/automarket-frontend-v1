import React, { FC } from "react";

import { useController } from "react-hook-form";

import { CodeVerificationField, CodeVerificationFieldProps } from ".";
import { FormControl, FormControlPropsForFields } from "../FormControl";

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
        onChange={field.onChange}
        value={field.value}
      />
    </FormControl>
  );
};
