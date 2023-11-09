import React, { FC } from "react";

import MaskedInput, { MaskedInputProps } from "react-text-mask";

import { SimpleTextField, SimpleTextFieldProps } from "../SimpleTextField";

export interface TextMaskFieldProps
  extends SimpleTextFieldProps,
    Pick<MaskedInputProps, "mask" | "guide" | "placeholderChar" | "keepCharPositions" | "pipe" | "showMask"> {}

export const TextMaskField: FC<TextMaskFieldProps> = ({
  mask,
  guide = false,
  placeholderChar,
  keepCharPositions,
  pipe,
  showMask,
  ...props
}) => {
  return (
    <MaskedInput
      mask={mask}
      guide={guide}
      placeholderChar={placeholderChar}
      keepCharPositions={keepCharPositions}
      pipe={pipe}
      showMask={showMask}
      render={(ref, maskedInputProps) => {
        return <SimpleTextField {...maskedInputProps} {...props} ref={ref} />;
      }}
    />
  );
};
