import React, { FC, forwardRef } from "react";

import MaskedInput, { MaskedInputProps } from "react-text-mask";

import { SimpleTextField, SimpleTextFieldProps } from "../SimpleTextField";

export interface TextMaskFieldProps
  extends SimpleTextFieldProps,
    Pick<MaskedInputProps, "mask" | "guide" | "placeholderChar" | "keepCharPositions" | "pipe" | "showMask"> {}

export const TextMaskField = forwardRef<MaskedInput, TextMaskFieldProps>(
  ({ mask, guide = false, placeholderChar, keepCharPositions, pipe, showMask, ...props }, ref) => {
    return (
      <MaskedInput
        guide={guide}
        keepCharPositions={keepCharPositions}
        mask={mask}
        pipe={pipe}
        placeholderChar={placeholderChar}
        ref={ref}
        render={(maskedInputRef, maskedInputProps) => {
          return (
            <SimpleTextField
              {...props}
              {...maskedInputProps}
              ref={maskedInputRef}
              onChange={(e) => {
                maskedInputProps.onChange(e);
              }}
            />
          );
        }}
        showMask={showMask}
        onChange={props.onChange}
      />
    );
  }
);

TextMaskField.displayName = "TextMaskField";
