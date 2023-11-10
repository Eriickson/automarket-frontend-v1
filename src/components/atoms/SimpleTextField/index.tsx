import React, { forwardRef } from "react";
import { Input, InputProps } from "@chakra-ui/react";
import { FieldComponentProps } from "@/app/signup/register-email/components/view/steps/RegisterPersonalInformation";

export interface SimpleTextFieldProps extends InputProps {
  label?: string;
}

export const SimpleTextField = forwardRef<HTMLElement, SimpleTextFieldProps>(({ label, ...props }, ref) => {
  return <Input _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }} py="6" {...props} ref={ref} />;
});

SimpleTextField.displayName = "SimpleTextField";
