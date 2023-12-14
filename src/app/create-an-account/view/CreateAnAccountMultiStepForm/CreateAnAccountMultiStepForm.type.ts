import { RegisterAgencyFormType } from "./steps/CreateAnAgency/form/schema";
import { RegisterPersonalInformationFormType } from "./steps/PersonalInformation/form/schema";
import { ValidateInvitationCodeFormType } from "./steps/ValidateInvitationCode/form/schema";

export type CreateAnAccountMultiStepFormType = {
  registerAgency: RegisterAgencyFormType;
  registerPersonalInformation: RegisterPersonalInformationFormType;
  validateInvitationCode: ValidateInvitationCodeFormType & { registrationToken: string };
};
