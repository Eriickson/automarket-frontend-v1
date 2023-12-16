import { RegisterAgencyFormType } from "./steps/CreateAnAgency/form/schema";
import { RegisterPersonalInformationFormType } from "./steps/PersonalInformation/form/schema";
import { SelectAccountTypeFormType } from "./steps/SelectAccountType/form/schema";
import { ValidateInvitationCodeFormType } from "./steps/ValidateInvitationCode/form/schema";

export type CreateAnAccountMultiStepFormType = {
  selectAccountType: SelectAccountTypeFormType;
  registerAgency: RegisterAgencyFormType;
  registerPersonalInformation: RegisterPersonalInformationFormType;
  validateInvitationCode: ValidateInvitationCodeFormType & { registrationToken: string };
};
