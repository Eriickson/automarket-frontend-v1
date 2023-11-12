import React, { FC } from "react";

import { SelectFieldContextProvider } from "./context";
import { ContextualMenu } from "./ContextualMenu";

export type Option = {
  label: string;
  value: string;
  isDisabled?: boolean;
};

interface SelectFieldProps {
  defaultValue?: Array<Option>;
  options: Array<Option>;
  value?: Option;
  onChange?(value: Option): void;
}

export const SelectField: FC<SelectFieldProps> = ({ defaultValue = [], options, value, onChange }) => {
  return (
    <SelectFieldContextProvider allowMultiple options={options}>
      <ContextualMenu />
    </SelectFieldContextProvider>
  );
};
