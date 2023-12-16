import sortKeys from "sort-object-keys";

import { authApi } from "./features/api/auth";
import { dealerBranchesApi } from "./features/api/dealer-branches";
import { jsonPlaceholderApi } from "./features/api/jsonplaceholder";
import { municipalitiesApi } from "./features/api/municipalities";
import { provincesApi } from "./features/api/provinces";
import { sectorsApi } from "./features/api/sectors";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = sortKeys({
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [provincesApi.reducerPath]: provincesApi.reducer,
  [municipalitiesApi.reducerPath]: municipalitiesApi.reducer,
  [sectorsApi.reducerPath]: sectorsApi.reducer,
  [dealerBranchesApi.reducerPath]: dealerBranchesApi.reducer,
});

export const rootReducer = combineReducers(reducers);

export type RootStore = ReturnType<typeof rootReducer>;
