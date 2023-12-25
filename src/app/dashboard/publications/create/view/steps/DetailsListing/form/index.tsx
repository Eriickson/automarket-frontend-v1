import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { CheckboxGroupField } from "@/components/organisms/CheckboxGroupField";
import { RadioGroupField } from "@/components/organisms/RadioGroupField";
import { SelectOptionField } from "@/components/organisms/SelectOptionField";

import { useFormProvider } from "@/hooks/useFormProvider";

interface DetailsListingFormProps extends FormComponentProps<{}> {}

export const DetailsListingForm: FC<DetailsListingFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<DetailsListingFormProps>({ defaultValues, id /* , resolver */ });

  return (
    <FormProvider onSubmit={onSubmit}>
      <Box>
        <Box mb="4">
          <Text fontSize="xl" fontWeight="semibold" lineHeight={1}>
            Comodidades y Confort
          </Text>
        </Box>
        <Box mb="4">
          <UnorderedList spacing="4">
            <ListItem>
              <Text fontWeight="medium">¿El vehículo tiene aire acondicionado?</Text>
              <RadioGroupField
                options={[
                  { label: "Sí", value: "yes" },
                  { label: "No", value: "no" },
                ]}
              />
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Bolsas de aires</Text>
              <CheckboxGroupField
                options={[
                  { label: "Todas", value: "all", isIndeterminate: true },
                  { label: "Conductor", value: "driver" },
                  { label: "Pasajero", value: "passenger" },
                  { label: "Traseras", value: "rear" },
                  { label: "Laterales", value: "side" },
                ]}
              />
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Mecanismo de los cristales</Text>

              <RadioGroupField
                options={[
                  { label: "Automáticos", value: "automatic" },
                  { label: "Manuales", value: "manual" },
                ]}
              />
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Material de los Asientos</Text>
              <RadioGroupField
                options={[
                  { label: "Pana", value: "pana" },
                  { label: "Piel", value: "piel" },
                  { label: "Tela", value: "tela" },
                  { label: "Algodón", value: "algodon" },
                ]}
              />
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Condiciones de las Llantas</Text>
              <SelectOptionField
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => ({
                  label: value.toString(),
                  value: value.toString(),
                }))}
              />
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Filas de Asientos</Text>
              <SelectOptionField
                options={[1, 2, 3].map((value) => ({
                  label: value.toString(),
                  value: value.toString(),
                }))}
              />
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Barras de Impacto</Text>
              <CheckboxGroupField
                options={[
                  { label: "Todas", value: "all", isIndeterminate: true },
                  { label: "Frontal", value: "frontal" },
                  { label: "Lateral", value: "lateral" },
                  { label: "Trasera", value: "trasera" },
                  { label: "Techo", value: "techo" },
                ]}
              />
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Condiciones del interior</Text>
              <SelectOptionField
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => ({
                  label: value.toString(),
                  value: value.toString(),
                }))}
              />
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </FormProvider>
  );
};
