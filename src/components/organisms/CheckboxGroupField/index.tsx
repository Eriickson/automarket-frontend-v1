"use client";
import React, { FC, useState } from "react";

import { Checkbox, CheckboxGroup as ChakraCheckboxGroup, Stack, Text } from "@chakra-ui/react";

import { Option } from "..";

type CheckboxGroupFieldItem = { isIndeterminate?: boolean } & Option;

interface CheckboxGroupFieldProps {
  options: CheckboxGroupFieldItem[];
  value?: string[];
  onChange?(value: string[]): void;
}

export const CheckboxGroupField: FC<CheckboxGroupFieldProps> = ({ value = [], options, onChange }) => {
  const [internalValue, setInternalValue] = useState<string[]>(value);

  const allChecked = options
    .filter(({ isIndeterminate }) => !isIndeterminate)
    .every((option) => internalValue.includes(option.value));

  const isIndeterminate =
    options.filter(({ isIndeterminate }) => !isIndeterminate).some((option) => internalValue.includes(option.value)) &&
    !allChecked;

  function handleChange(value: string, isChecked: boolean) {
    const newValue = isChecked ? [...internalValue, value] : internalValue.filter((v) => v !== value);
    onChange?.(newValue);
    setInternalValue(newValue);
  }

  function toggleAll(isChecked: boolean) {
    const newValue = isChecked ? options.map(({ value }) => value) : [];
    onChange?.(newValue);
    setInternalValue(newValue);
  }

  return (
    <ChakraCheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
      <Stack direction={["column", "row"]} spacing={[1, 5]}>
        {options.map((option) => (
          <Checkbox
            colorScheme="secondary"
            isChecked={option.isIndeterminate ? allChecked : internalValue.includes(option.value)}
            isIndeterminate={option.isIndeterminate && isIndeterminate}
            key={option.value}
            onChange={(value) => {
              if (option.isIndeterminate) {
                toggleAll(value.target.checked);
              } else {
                handleChange(option.value, value.target.checked);
              }
            }}
          >
            <Text>{option.label}</Text>
          </Checkbox>
        ))}
      </Stack>
    </ChakraCheckboxGroup>
  );
};
