import React, { FC, useMemo } from "react";

import { Text } from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";

import { TextDateField, TextDateFieldProps } from ".";

interface TextDateFieldControllerProps extends TextDateFieldProps {
  name: string;
}

export const TextDateFieldController: FC<TextDateFieldControllerProps> = ({ name, ...props }) => {
  const { control, register, formState } = useFormContext();

  const errorData = formState.errors[name];

  const error = useMemo(() => errorData?.message as string | null, [errorData]);

  return (
    <>
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
      {error ? <Text color="red.500">{error}</Text> : null}
    </>
  );
};
