import React, { Fragment } from "react";

import { Box, Divider, List } from "@chakra-ui/react";

import { OptionsListItem } from "./OptionsListItem";
import useSelectFieldContext from "./context";

export const OptionsList = () => {
  const { optionsAvailable, valuesSelected } = useSelectFieldContext();

  return (
    <Box h="80" overflow="auto">
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
      </List>
    </Box>
  );
};
