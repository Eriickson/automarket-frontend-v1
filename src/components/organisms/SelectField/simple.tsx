import React, { FC } from "react";

import { SelectFieldContextProvider, SelectFieldContextProviderArgs } from "./context";
import { ContextualMenu } from "./ContextualMenu";

export type Option = {
  label: string;
  value: string;
  isDisabled?: boolean;
};

export interface SelectFieldProps extends Omit<SelectFieldContextProviderArgs, "children"> {}

export const SelectField: FC<SelectFieldProps> = ({ ...props }) => {
  return (
    <SelectFieldContextProvider {...props}>
      <ContextualMenu />
    </SelectFieldContextProvider>
  );
};
