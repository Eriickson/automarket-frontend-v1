import React, { FC } from "react";
import { SimpleTextFieldProps } from "../SimpleTextField";
import { TextMaskField } from "../TextMaskField";

interface TextDateFieldProps extends SimpleTextFieldProps {}

export const TextDateField: FC<TextDateFieldProps> = ({ ...props }) => {
  return <TextMaskField mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]} {...props} />;
};
