declare module "@atmk/endpoints" {
  export type AUTH_ENDPOINTS =
    | "SEND_INVITATION_CODE"
    | "VERIFY_INVITATION_CODE"
    | "SIGNUP"
    | "SIGNIN"
    | "SIGNOUT"
    | "REFRESH_TOKEN"
    | "PASSWORD_RESET_REQUEST"
    | "PASSWORD_RESET"
    | "BRANDS"
    | "MODELS"
    | "TRIM-LEVELS"
    | "TRACTIONS"
    | "TRANSMISSIONS"
    | "FUELS"
    | "VEHICLE-CONDITIONS";

  export type DEALERS_ENDPOINTS = "ROOT" | "SOCIAL_MEDIA";

  export type DEALER_BRANCHES_ENDPOINTS = "ROOT" | "ADDRESS" | "CONTACTS";
}
