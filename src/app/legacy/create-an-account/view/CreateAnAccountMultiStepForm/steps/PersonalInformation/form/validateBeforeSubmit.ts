// import { authApi } from "@/store/features/api/auth";

export const useValidateBeforeSubmit = () => {
  // const [checkFieldAvailability] = authApi.useLazyCheckFieldAvailabilityQuery();

  async function before(/* { email, username }: any, methods: any */): Promise<boolean> {
    // const [checkEmailAvailability, checkUsernameAvailability] = await Promise.all([
    //   checkFieldAvailability({ field: "email", value: email }),
    //   checkFieldAvailability({ field: "username", value: username }),
    // ]);

    // if (!checkEmailAvailability.data?.data.available || !checkUsernameAvailability.data?.data.available) {
    //   if (!checkEmailAvailability.data?.data.available) {
    //     methods.setError("email", {
    //       type: "manual",
    //       message: "No disponible",
    //     });
    //   }
    //   if (!checkUsernameAvailability.data?.data.available) {
    //     methods.setError("username", {
    //       type: "manual",
    //       message: "No disponible",
    //     });
    //   }
    //   return false;
    // }
    // return true;

    return true;
  }

  return { before };
};
