import React, { FC } from "react";

import { Text } from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";

import { TextDateField, TextDateFieldProps } from ".";

interface TextDateFieldControllerProps extends TextDateFieldProps {
  name: string;
}

export const TextDateFieldController: FC<TextDateFieldControllerProps> = ({ name, ...props }) => {
  const { control, register, formState } = useFormContext();

  return (
    <>
      {/* <TextDateField {...register(name)} {...props} /> */}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextDateField
            {...props}
            value={field.value}
            onChange={(e) => {
              console.log(e.target.value);

              field.onChange(e.target.value);
            }}
          />
        )}
      />
      <Text color="red.500">{formState.errors[name]?.message?.toString()}</Text>
    </>
  );
};
