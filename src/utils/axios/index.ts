import axios, { AxiosError } from "axios";

import authService from "./authService";

type AxiosErrorWithRetry = AxiosError & {
  config: {
    _retry?: boolean;
  };
};

const axiosInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_BASE_URL });

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access-token");

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    if (config.headers.Authorization && config.url && config.url.includes("/refresh-token"))
      delete config.headers.Authorization;

    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (err: AxiosErrorWithRetry) => {
    const originalRequest = err.config;

    if (
      err.response &&
      err.response.status === 401 &&
      !originalRequest.url?.includes("/refresh-token") &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const isRefreshTokenSuccessful = await authService.refreshToken();

      if (isRefreshTokenSuccessful) return axiosInstance(originalRequest);
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
