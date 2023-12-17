"use client";
import React, { useEffect } from "react";

// import { provincesApi } from "@/store/features/api/provinces";
import axiosInstance from "@/utils/axios";

export const Component = () => {
  // const { data } = provincesApi.useGetProvincesQuery(null);
  // console.log(data);

  useEffect(() => {
    axiosInstance.get("/v1/provinces").then((res) => {});
    axiosInstance.get("/v1/provinces/657772a252d291ea36db2b8f/municipalities").then((res) => {});
    axiosInstance
      .get("/v1/provinces/657772a252d291ea36db2b8f/municipalities/657772a752d291ea36db2bfe/sectors")
      .then((res) => {});
  }, []);

  return <div>Component</div>;
};
