import { axiosBaseQuery } from "@/store/baseQueries";

import { sendInvitationCode } from "./send-invitation-code";
import { signin } from "./signin";
import { signup } from "./signup";
import { verifyInvitationCode } from "./verify-invitation-code";
import { createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/auth" }),
  reducerPath: "authApi",
  endpoints: (build) => ({
    sendInvitationCode: sendInvitationCode(build),
    verifyInvitationCode: verifyInvitationCode(build),
    signup: signup(build),
    signin: signin(build),
  }),
});
