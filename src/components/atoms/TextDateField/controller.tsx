import React, { FC } from "react";

import { Controller, useFormContext } from "react-hook-form";

import { FormControl, FormControlPropsForFields } from "../FormControl";
import { TextDateField, TextDateFieldProps } from "./simple";

interface TextDateFieldControllerProps extends TextDateFieldProps, FormControlPropsForFields {
  name: string;
}

export const TextDateFieldController: FC<TextDateFieldControllerProps> = ({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <FormControl {...props}>
      <Controller
        control={control}
        name={name}
        render={({ field, formState }) => (
          <TextDateField
            {...props}
            isLoading={formState.isSubmitting}
            value={field.value}
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
          />
        )}
      />
    </FormControl>
  );
};
