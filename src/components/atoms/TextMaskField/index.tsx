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
        mask={mask}
        guide={guide}
        placeholderChar={placeholderChar}
        keepCharPositions={keepCharPositions}
        pipe={pipe}
        onChange={props.onChange}
        ref={ref}
        showMask={showMask}
        render={(maskedInputRef, maskedInputProps) => {
          return (
            <SimpleTextField
              {...props}
              {...maskedInputProps}
              onChange={(e) => {
                maskedInputProps.onChange(e);
              }}
              ref={maskedInputRef}
            />
          );
        }}
      />
    );
  }
);

TextMaskField.displayName = "TextMaskField";
