import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";
import { authApi } from "@/store/features/api/auth";
import { dealerBranchesApi } from "@/store/features/api/dealer-branches";
import { dealersApi } from "@/store/features/api/dealers";

import { useHandleErrors } from "@/hooks";

import moment from "moment";

import { CreateAnAccountMultiStepFormType } from "../../CreateAnAccountMultiStepForm.type";
import { CreateAnAgencyForm } from "./form";
import { RegisterAgencyFormType } from "./form/schema";

interface CreateAnAgencyStepProps extends MultiStepFormItemComponentProps<CreateAnAccountMultiStepFormType> {}

export const CreateAnAgencyStep: FC<CreateAnAgencyStepProps> = ({ nextStep, addInformation, values: information }) => {
  const [signupMutation] = authApi.useSignupMutation();
  const [updateAddressMutation] = dealerBranchesApi.useUpdateAddressMutation();
  const [createDealerMutation] = dealersApi.useCreateDealerMutation();

  const { handleErrors } = useHandleErrors();

  async function handleSubmit(values: RegisterAgencyFormType) {
    const response = await signupMutation({
      data: {
        ...information.registerPersonalInformation!,
        birthdate: moment(information.registerPersonalInformation!.birthdate).format("YYYY-MM-DD"),
      },
      headers: {
        "x-registration-token": information.validateInvitationCode!.registrationToken,
      },
    });

    if ("error" in response) return handleErrors(response);

    // localStorage.setItem("access-token", response.data.data.tokens.accessToken);
    // localStorage.setItem("refresh-token", response.data.data.tokens.refreshToken);

    await createDealerMutation({ data: { name: values.name, slogan: values.slogan } });

    await updateAddressMutation({
      data: {
        address: {
          location: {
            provinceId: values.province.at(0)!.value,
            municipalityId: values.municipality.at(0)!.value,
            sectorId: values.sector.at(0)!.value,
            street: values.street,
            reference: values.reference,
          },
        },
      },
    });

    addInformation({ registerAgency: values });
    nextStep();
  }

  return <CreateAnAgencyForm onSubmit={handleSubmit} />;
};
