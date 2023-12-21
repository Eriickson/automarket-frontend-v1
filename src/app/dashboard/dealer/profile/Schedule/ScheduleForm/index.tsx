import React, { FC, useState } from "react";

import { FormComponentProps } from "@atmk/components";

import { Stack } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { GroupedWeekDaysField } from "./GroupedWeekDaysField";
import { resolver, ScheduleFormValuesType } from "./schema";
import { UngroupedWeekDaysField } from "./UngroupedWeekDaysField";
import { WeekendDaysField } from "./WeekendDaysField";

interface ScheduleFormProps extends FormComponentProps<ScheduleFormValuesType> {}

export const ScheduleForm: FC<ScheduleFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<ScheduleFormValuesType>({ defaultValues, resolver, id });

  const [isGroupedWeekDays, setIsGroupedWeekDays] = useState(true);

  return (
    <FormProvider onSubmit={onSubmit}>
      <Stack>
        <Stack w="max-content">
          <Button
            backgroundColor="gray.100"
            colorScheme="primary"
            size="sm"
            variant="ghost"
            w="max-content"
            onClick={() => setIsGroupedWeekDays(!isGroupedWeekDays)}
          >
            {isGroupedWeekDays ? "Desagrupar" : "Agrupar"} días de la semana
          </Button>
          {isGroupedWeekDays ? <GroupedWeekDaysField /> : <UngroupedWeekDaysField />}
          <WeekendDaysField />
        </Stack>
      </Stack>
    </FormProvider>
  );
};
