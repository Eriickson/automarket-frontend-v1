import React, { FC, useState } from "react";

import { Box, Checkbox, HStack, Text } from "@chakra-ui/react";

import { SimpleTextField, SimpleTextFieldController } from "@/components/atoms";

type WeekDayValue = {
  startTime: string;
  endTime: string;
  isWorkingDay: boolean;
};

interface WeekDayFieldProps {
  label: string;
  value?: WeekDayValue;
  onChange?(value: WeekDayValue): void;
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
            isDisabled={!value?.isWorkingDay}
            placeholder="Select Date and Time"
            px="2.5"
            py="2"
            type="time"
            value={value?.startTime}
            onChange={(e) => console.log(e.target.value)}
          />
        </Box>
        <Box w="36">
          <SimpleTextField
            fontSize="sm"
            isDisabled={!value?.isWorkingDay}
            placeholder="Select Date and Time"
            px="2.5"
            py="2"
            size="md"
            type="time"
            value={value?.endTime}
          />
        </Box>
        <Checkbox
          colorScheme="secondary"
          isChecked={!value?.isWorkingDay}
          // onChange={(e) => setIsClosed(e.target.checked)}
        >
          <Text fontWeight="medium">Cerrado</Text>
        </Checkbox>
      </HStack>
    </Box>
  );
};
