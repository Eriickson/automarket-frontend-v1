import React, { FC } from "react";

import { Box, Checkbox, HStack, Text } from "@chakra-ui/react";

import { SimpleTextField } from "@/components/atoms";

export type WeekDayValue = {
  startTime: string;
  endTime: string;
  isClosed: boolean;
};

interface WeekDayFieldProps {
  label: string;
  value: WeekDayValue;
  onChange(value: WeekDayValue): void;
}

export const WeekDayField: FC<WeekDayFieldProps> = ({ onChange, value, label }) => {
  return (
    <Box>
      <Text fontSize="sm" fontWeight="medium">
        {label}
      </Text>
      <HStack spacing="3">
        <Box w="36">
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
        </Box>
        <Box w="36">
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
        </Box>
        <Checkbox
          colorScheme="secondary"
          isChecked={value.isClosed}
          onChange={(e) => onChange({ ...value, isClosed: e.target.checked })}
        >
          <Text fontWeight="medium">Cerrado</Text>
        </Checkbox>
      </HStack>
    </Box>
  );
};
