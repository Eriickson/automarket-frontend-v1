import { EnterYourNewPasswordFormType } from "./steps/EnterYourNewPassword/form/schema";
import { SendPasswordRecoveryRequestFormType } from "./steps/SendPasswordRecoveryRequest/form/schema";
import { ValidateCodeFormType } from "./steps/ValidateCode/form/schema";

export type RecoverYourPasswordType = {
  sendPasswordRecoveryRequest: SendPasswordRecoveryRequestFormType;
  validateCode: ValidateCodeFormType & { passwordResetToken: string };
  enterYourNewPassword: EnterYourNewPasswordFormType;
};
