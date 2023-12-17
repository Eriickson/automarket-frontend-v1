import axiosInstance from "./index";

let isRefreshing = false;

const authService = {
  refreshToken: async () => {
    try {
      if (isRefreshing) {
        // Si ya se está refrescando, espera a que termine y devuelve el resultado.
        await new Promise((resolve) => {
          const intervalId = setInterval(() => {
            if (!isRefreshing) {
              clearInterval(intervalId);
              resolve(true);
            }
          }, 100);
        });
        return true;
      }

      isRefreshing = true;

      const refreshToken = localStorage.getItem("refresh-token");

      const response = await axiosInstance.post("/v1/auth/refresh-token", null, {
        headers: { "x-refresh-token": refreshToken },
      });

      const { accessToken, refreshToken: newRefreshToken } = response.data.data.tokens;

      localStorage.setItem("access-token", accessToken);
      localStorage.setItem("refresh-token", newRefreshToken);

      return true;
    } catch (error) {
      console.log("Refresh token error", error);

      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      return false;
    } finally {
      isRefreshing = false;
    }
  },
};

export default authService;
