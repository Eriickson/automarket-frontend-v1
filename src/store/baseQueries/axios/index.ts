import axiosInstance from "@/utils/axios";

import { AxiosError, AxiosRequestConfig, Method } from "axios";

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
  ({ baseUrl = "/v1", module }: Partial<AxiosBaseQueryArgs>): AxiosBaseQueryFn =>
  async ({ url, method, data, params, headers }) => {
    url = url !== "/" ? url : "";

    const accessToken = localStorage.getItem("access-token");

    if (accessToken) headers = { ...headers, Authorization: `Bearer ${accessToken}` };

    try {
      const result = await axiosInstance({ url: baseUrl + module + url, method, data, params, headers });
      return { data: result.data };
    } catch (err) {
      if (err instanceof AxiosError) {
        return { error: { status: err.response?.status, data: err.response?.data || err.message } };
      }

      return { error: { status: 500, data: "Ha ocurrido un error desconocido" } };
    }
  };
