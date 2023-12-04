import React, { Fragment } from "react";

import { Box, Divider, List, ListItem, Text } from "@chakra-ui/react";

import useSelectFieldContext from "./context";
import { OptionsListItem } from "./OptionsListItem";

export const OptionsList = () => {
  const { optionsAvailable, valuesSelected, showTotalSesults } = useSelectFieldContext();

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
            <Text color="gray.400" fontSize="sm" textAlign="center" userSelect="none">
              No hay resultados
            </Text>
          </ListItem>
        ) : null}
      </List>
      <Divider />
      {showTotalSesults ? (
        <Box>
          <Text color="gray.400" fontSize="sm" py="3" textAlign="center" userSelect="none">
            {optionsAvailable.length} resultados encontrados
          </Text>
        </Box>
      ) : null}
    </Box>
  );
};
