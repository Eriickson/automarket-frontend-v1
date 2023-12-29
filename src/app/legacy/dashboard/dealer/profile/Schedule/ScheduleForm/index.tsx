import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Stack } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { GroupedWeekDaysField } from "./GroupedWeekDaysField";
import { resolver, ScheduleFormValuesType } from "./schema";
import { UngroupedWeekDaysField } from "./UngroupedWeekDaysField";
import { WeekendDaysField } from "./WeekendDaysField";

interface ScheduleFormProps extends FormComponentProps<ScheduleFormValuesType> {}

export const ScheduleForm: FC<ScheduleFormProps> = ({ defaultValues, onSubmit, id }) => {
  const { FormProvider, methods } = useFormProvider<ScheduleFormValuesType>({ defaultValues, resolver, id });

  const isGroupedWeekDays = methods.watch("isGroupedWeekDays");

  function handleChangeGrouping() {
    const newIsGroupedWeekDays = !isGroupedWeekDays;

    if (newIsGroupedWeekDays) {
      const mondayValue = methods.getValues("schedule").at(0)!;

      const saturdayValue = methods.getValues("schedule").at(5)!;
      const sundayValue = methods.getValues("schedule").at(6)!;

      methods.setValue("schedule", Array(5).fill(mondayValue).concat([saturdayValue, sundayValue]));
    }

    methods.setValue("isGroupedWeekDays", newIsGroupedWeekDays);
  }

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
            onClick={handleChangeGrouping}
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
