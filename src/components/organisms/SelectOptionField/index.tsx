import React, { FC, useState } from "react";

import { Center, HStack, Text } from "@chakra-ui/react";

import { Option } from "..";

interface SelectOptionFieldProps {
  value?: Option;
  onChange?(value: Option): void;
  options: Option[];
}

export const SelectOptionField: FC<SelectOptionFieldProps> = ({ options, onChange }) => {
  const [internalValue, setInternalValue] = useState<Option>();

  return (
    <HStack>
      {options.map((item) => {
        const isActive = item.value === internalValue?.value;

        return (
          <Center
            bgColor={isActive ? "secondary.500" : "white"}
            border="1px"
            borderColor="gray.400"
            color={isActive ? "white" : "secondary.500"}
            cursor="pointer"
            h="8"
            key={item.value}
            rounded="sm"
            w="8"
            onClick={() => {
              setInternalValue(item);
              onChange?.(item);
            }}
          >
            <Text fontSize="sm" fontWeight="medium" userSelect="none">
              {item.label}
            </Text>
          </Center>
        );
      })}
    </HStack>
  );
};
