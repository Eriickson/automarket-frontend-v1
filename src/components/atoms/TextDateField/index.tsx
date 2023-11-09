import React, { FC, forwardRef } from "react";
import { SimpleTextFieldProps } from "../SimpleTextField";
import { TextMaskField, TextMaskFieldProps } from "../TextMaskField";
import MaskedInput from "react-text-mask";

export interface TextDateFieldProps extends SimpleTextFieldProps, Omit<TextMaskFieldProps, "mask"> {}

export const TextDateField = forwardRef<MaskedInput, TextDateFieldProps>((props, ref) => {
  return <TextMaskField ref={ref} mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]} {...props} />;
});

TextDateField.displayName = "TextDateField";
