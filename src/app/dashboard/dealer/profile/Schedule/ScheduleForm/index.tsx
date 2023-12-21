import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { useFormProvider } from "@/hooks/useFormProvider";

import { resolver, ScheduleFormValuesType } from "./schema";

interface ScheduleFormProps extends FormComponentProps<ScheduleFormValuesType> {}

export const ScheduleForm: FC<ScheduleFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<ScheduleFormValuesType>({ defaultValues, resolver, id });

  return <FormProvider onSubmit={onSubmit}>Hola a todos</FormProvider>;
};
