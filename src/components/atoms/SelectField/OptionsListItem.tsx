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
      pl="4"
      pr="2"
      py="2"
      color={isSelected ? undefined : "gray.500"}
      bgColor={isSelected ? "gray.50" : "white"}
      fontWeight={isSelected ? "semibold" : "normal"}
      _hover={{ bgColor: "gray.50", cursor: "pointer" }}
      transition="200ms"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        !isSelected && handleAddItemToSelectedList(option);
        !allowMultiple && handleFocus(false);
      }}
    >
      <HStack h="6" justifyContent="space-between">
        <Text userSelect="none" fontSize="sm">
          {option.label}
        </Text>
        <IconButton
          transition="200ms"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveItemToSelectedList(option);
          }}
          variant="ghost"
          rounded="sm"
          size="xs"
          aria-label="remove item"
          display={isSelected && isHover ? "flex" : "none"}
        >
          <X size="1rem" />
        </IconButton>
      </HStack>
    </ListItem>
  );
};
