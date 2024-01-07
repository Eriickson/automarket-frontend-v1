import React from "react";

import { Box, Stack } from "@chakra-ui/react";

import { SelectField } from "@/components/organisms";

export const BodyModalComponent = () => {
  return (
    <Box>
      <Stack>
        <SelectField options={[]} />
        <SelectField options={[]} />
        <SelectField options={[]} />
        <SelectField options={[]} />
        <SelectField options={[]} />
      </Stack>
    </Box>
  );
};
