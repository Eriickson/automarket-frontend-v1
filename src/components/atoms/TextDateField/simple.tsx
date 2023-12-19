import React, { forwardRef } from "react";

import MaskedInput from "react-text-mask";

import { SimpleTextFieldProps } from "../SimpleTextField";
import { TextMaskField, TextMaskFieldProps } from "../TextMaskField";

export interface TextDateFieldProps extends SimpleTextFieldProps, Omit<TextMaskFieldProps, "mask"> {}

export const TextDateField = forwardRef<MaskedInput, TextDateFieldProps>((props, ref) => {
  return <TextMaskField mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]} ref={ref} {...props} />;
});

TextDateField.displayName = "TextDateField";
