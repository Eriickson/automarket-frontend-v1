import React, { Fragment } from "react";

import { Box, Divider, List, Text } from "@chakra-ui/react";

import { OptionsListItem } from "./OptionsListItem";
import useSelectFieldContext from "./context";

export const OptionsList = () => {
  const { optionsAvailable, valuesSelected } = useSelectFieldContext();

  return (
    <Box maxH="80" overflow="auto">
      <List>
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
          <Box p="3">
            <Text textAlign="center" userSelect="none" fontSize="sm" color="gray.400">
              No hay resultados
            </Text>
          </Box>
        ) : null}
      </List>
    </Box>
  );
};
