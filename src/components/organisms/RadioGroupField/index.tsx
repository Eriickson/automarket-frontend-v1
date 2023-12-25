import React, { FC } from "react";

import { Radio, RadioGroup as ChakraRadioGroup, Stack, Text } from "@chakra-ui/react";

import { Option } from "..";

interface RadioGroupFieldProps {
  options: Option[];
}

export const RadioGroupField: FC<RadioGroupFieldProps> = ({ options }) => {
  const [value, setValue] = React.useState("1");

  return (
    <ChakraRadioGroup value={value} onChange={setValue}>
      <Stack direction="row">
        {options.map((option) => (
          <Radio colorScheme="secondary" key={option.value} value={option.value}>
            <Text>{option.label}</Text>
          </Radio>
        ))}
      </Stack>
    </ChakraRadioGroup>
  );
};
