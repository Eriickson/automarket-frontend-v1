import React, { FC, Fragment, useState } from "react";

import { Box, Divider, HStack, List, ListItem, Text, useOutsideClick } from "@chakra-ui/react";

import { SimpleTextField } from "@/components/atoms/SimpleTextField";

type Option = {
  label: string;
  value: string;
  isDisabled?: boolean;
};

interface SelectFieldProps {
  options: Array<Option>;
}

export const SelectField: FC<SelectFieldProps> = ({ options }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const boxContainerRef = React.useRef(null);

  const [isFocus, setIsFocus] = useState(false);

  useOutsideClick({ ref: boxContainerRef, handler: () => setIsFocus(false) });

  return (
    <Box ref={boxContainerRef} position="relative">
      <SimpleTextField ref={inputRef} placeholder="Seleccionar una opción" onFocus={() => setIsFocus(true)} />
      <Box
        backgroundColor="white"
        position="absolute"
        top="14"
        border="1px"
        borderColor="gray.200"
        shadow="sm"
        left="0"
        right="0"
        display={isFocus ? "block" : "none"}
      >
        <Box h="64" overflow="auto">
          <List>
            {options.map((option, index) => (
              <Fragment key={option.value}>
                {index !== 0 ? <Divider /> : null}
                <ListItem
                  px="4"
                  py="2"
                  _hover={{ bgColor: "gray.50", cursor: "pointer" }}
                  transition="200ms"
                  onClick={() => {
                    setIsFocus(false);
                  }}
                >
                  <HStack>
                    <Text fontSize="sm">{option.label}</Text>
                  </HStack>
                </ListItem>
              </Fragment>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
