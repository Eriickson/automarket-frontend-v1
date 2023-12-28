import React, { FC } from "react";

import { useFormContext } from "react-hook-form";

import { Button, ButtonProps } from "..";

interface SubmitButtonProps extends ButtonProps {}

export const SubmitButton: FC<SubmitButtonProps> = ({ children, ...props }) => {
  const { formState } = useFormContext();

  return (
    <Button isLoading={formState.isSubmitting || formState.isLoading} type="submit" w="full" {...props}>
      {children}
    </Button>
  );
};
