"use client";

import React, { Fragment, useState } from "react";

import { Box, Divider, HStack, List, ListItem, Text, useOutsideClick } from "@chakra-ui/react";

import { SimpleTextField } from "@/components/atoms/SimpleTextField";
import { SelectField } from "@/components/atoms/SelectField";

const CustomPage = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const boxContainerRef = React.useRef(null);

  const [isFocus, setIsFocus] = useState(false);

  useOutsideClick({ ref: boxContainerRef, handler: () => setIsFocus(false) });

  return (
    <Box m="24">
      <Box w="96">
        <SelectField
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => ({ label: `item - ${i}`, value: `value-${i}` }))}
        />
      </Box>
    </Box>
  );
};

export default CustomPage;
