import React, { FC } from "react";

import { useFormContext, Controller } from "react-hook-form";

import { TextDateField, TextDateFieldProps } from ".";
import { FormControl, FormControlPropsForFields } from "../FormControl";

interface TextDateFieldControllerProps extends TextDateFieldProps, FormControlPropsForFields {
  name: string;
}

export const TextDateFieldController: FC<TextDateFieldControllerProps> = ({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <FormControl {...props}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextDateField
            {...props}
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
