import React, { FC } from "react";

import { SelectFieldContextProvider, SelectFieldContextProviderArgs } from "./context";
import { ContextualMenu } from "./ContextualMenu";

export type Option = {
  label: string;
  value: string;
  isDisabled?: boolean;
};

interface SelectFieldProps extends Omit<SelectFieldContextProviderArgs, "children"> {
  defaultValue?: Array<Option>;
  options: Array<Option>;
  value?: Option;
  onChange?(value: Option): void;
}

export const SelectField: FC<SelectFieldProps> = ({ ...props }) => {
  return (
    <SelectFieldContextProvider {...props}>
      <ContextualMenu />
    </SelectFieldContextProvider>
  );
};
