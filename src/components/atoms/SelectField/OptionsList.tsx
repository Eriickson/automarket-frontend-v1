import React, { Fragment } from "react";

import { Box, Divider, List, ListItem, Text } from "@chakra-ui/react";

import { OptionsListItem } from "./OptionsListItem";
import useSelectFieldContext from "./context";

export const OptionsList = () => {
  const { optionsAvailable, valuesSelected } = useSelectFieldContext();

  return (
    <Box>
      <List maxH="80" overflow="auto">
        {optionsAvailable.map((option, index) => {
          return (
            <Fragment key={option.value}>
              {index !== 0 ? <Divider /> : null}
              <OptionsListItem
                isSelected={Boolean(valuesSelected.find(({ value }) => value === option.value)) || false}
                option={option}
              />
            </Fragment>
          );
        })}
        {optionsAvailable.length === 0 ? (
          <ListItem p="3">
            <Text textAlign="center" userSelect="none" fontSize="sm" color="gray.400">
              No hay resultados
            </Text>
          </ListItem>
        ) : null}
      </List>
      <Divider />
      <Box>
        <Text textAlign="center" py="3" userSelect="none" fontSize="sm" color="gray.400">
          {optionsAvailable.length} resultados encontrados
        </Text>
      </Box>
    </Box>
  );
};
