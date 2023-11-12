import type { BaseQueryFn } from "@reduxjs/toolkit/query";

import axios from "axios";
import type { AxiosRequestConfig, AxiosError, Method } from "axios";

export type AxiosBaseQueryFnArgs = {
  url: string;
  method: Method;
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
};

export type AxiosBaseQueryFn = BaseQueryFn<AxiosBaseQueryFnArgs, unknown, unknown>;

export const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: "http://localhost:8586/api" }): AxiosBaseQueryFn =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
