import React, { FC, useState } from "react";

import { HStack, IconButton, ListItem, Text } from "@chakra-ui/react";

import { X } from "react-feather";

import { Option } from ".";
import useSelectFieldContext from "./context";

interface OptionsListItemProps {
  isSelected: boolean;
  option: Option;
}
export const OptionsListItem: FC<OptionsListItemProps> = ({ isSelected, option }) => {
  const { allowMultiple, handleAddItemToSelectedList, handleRemoveItemToSelectedList, handleFocus } =
    useSelectFieldContext();

  const [isHover, setIsHover] = useState(false);

  return (
    <ListItem
      _hover={{ bgColor: "gray.50", cursor: "pointer" }}
      bgColor={isSelected ? "gray.50" : "white"}
      color={isSelected ? undefined : "gray.800"}
      fontWeight={isSelected ? "semibold" : "normal"}
      pl={["2", null, null, "4"]}
      pr="2"
      py="2"
      transition="200ms"
      onClick={() => {
        !isSelected && handleAddItemToSelectedList(option);
        !allowMultiple && handleFocus(false);
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <HStack h="6" justifyContent="space-between">
        <Text fontSize="sm" userSelect="none">
          {option.label}
        </Text>
        <IconButton
          aria-label="remove item"
          display={isSelected && isHover ? "flex" : "none"}
          rounded="sm"
          size="xs"
          transition="200ms"
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveItemToSelectedList(option);
          }}
        >
          <X size="1rem" />
        </IconButton>
      </HStack>
    </ListItem>
  );
};
