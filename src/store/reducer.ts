import { combineReducers } from "@reduxjs/toolkit";

import sortKeys from "sort-object-keys";

import { authApi } from "./features/api/auth";
import { brandsApi } from "./features/api/brands";
import { dealerBranchesApi } from "./features/api/dealer-branches";
import { municipalitiesApi } from "./features/api/municipalities";
import { provincesApi } from "./features/api/provinces";
import { sectorsApi } from "./features/api/sectors";

const reducers = sortKeys({
  [authApi.reducerPath]: authApi.reducer,
  [provincesApi.reducerPath]: provincesApi.reducer,
  [municipalitiesApi.reducerPath]: municipalitiesApi.reducer,
  [sectorsApi.reducerPath]: sectorsApi.reducer,
  [dealerBranchesApi.reducerPath]: dealerBranchesApi.reducer,
  [brandsApi.reducerPath]: brandsApi.reducer,
});

export const rootReducer = combineReducers(reducers);

export type RootStore = ReturnType<typeof rootReducer>;
