import type { AxiosError, AxiosRequestConfig, Method } from "axios";
import axios from "axios";

import type { BaseQueryFn } from "@reduxjs/toolkit/query";

export type AxiosBaseQueryFnArgs = {
  url: string;
  method: Method;
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
};

export type AxiosBaseQueryFn = BaseQueryFn<AxiosBaseQueryFnArgs, unknown, unknown>;

export type AxiosBaseQueryArgs = {
  baseUrl: string;
  module: string;
};

export const axiosBaseQuery =
  ({ baseUrl = "http://localhost:8586/v1", module }: Partial<AxiosBaseQueryArgs>): AxiosBaseQueryFn =>
  async ({ url, method, data, params, headers }) => {
    url = url !== "/" ? url : "";

    try {
      const result = await axios({ url: baseUrl + module + url, method, data, params, headers });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return { error: { status: err.response?.status, data: err.response?.data || err.message } };
    }
  };
