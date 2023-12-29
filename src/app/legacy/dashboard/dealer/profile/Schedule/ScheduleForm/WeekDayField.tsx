import React, { FC } from "react";

import { Box, Center, Checkbox, HStack, Text, Tooltip } from "@chakra-ui/react";

import { SimpleTextField } from "@/components/atoms";

import { HelpCircle } from "react-feather";

export type WeekDayValue = {
  startTime: string;
  endTime: string;
  isClosed: boolean;
};

interface WeekDayFieldProps {
  label: string;
  value: WeekDayValue;
  error?: string;
  onChange(value: WeekDayValue): void;
}

export const WeekDayField: FC<WeekDayFieldProps> = ({ onChange, error, value, label }) => {
  return (
    <Box>
      <Text fontSize="sm" fontWeight="medium">
        {label}
      </Text>
      <HStack spacing="3">
        <Box pos="relative" w="36">
          <SimpleTextField
            fontSize="sm"
            isDisabled={value.isClosed}
            placeholder="Select Date and Time"
            px="2.5"
            py="2"
            type="time"
            value={value.startTime}
            onChange={(e) => onChange({ ...value, startTime: e.target.value })}
          />
          {value.isClosed ? (
            <Box bgColor="gray.50" inset="2" pos="absolute">
              <Text color="gray.600" fontSize="sm" fontWeight="medium">
                Cerrado
              </Text>
            </Box>
          ) : null}
        </Box>
        <Box pos="relative" w="36">
          <SimpleTextField
            fontSize="sm"
            isDisabled={value.isClosed}
            placeholder="Select Date and Time"
            px="2.5"
            py="2"
            size="md"
            type="time"
            value={value.endTime}
            onChange={(e) => onChange({ ...value, endTime: e.target.value })}
          />
          {value.isClosed ? (
            <Box bgColor="gray.50" inset="2" pos="absolute">
              <Text color="gray.600" fontSize="sm" fontWeight="medium">
                Cerrado
              </Text>
            </Box>
          ) : null}
        </Box>
        <Checkbox
          colorScheme="secondary"
          isChecked={value.isClosed}
          onChange={(e) => {
            const isClosed = e.target.checked;
            onChange({ isClosed, endTime: "00:00", startTime: "00:00" });
          }}
        >
          <Text fontWeight="medium">Cerrado</Text>
        </Checkbox>
        {error ? (
          <Tooltip hasArrow label={error} placement="top-end">
            <Center bgColor="red.100" color="red.500" cursor="pointer" h="6" rounded="full" w="6">
              <HelpCircle size="1rem" />
            </Center>
          </Tooltip>
        ) : null}
      </HStack>
    </Box>
  );
};
