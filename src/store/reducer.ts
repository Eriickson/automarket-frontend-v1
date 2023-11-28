import sortKeys from "sort-object-keys";

import { authApi } from "./features/api/auth";
import { jsonPlaceholderApi } from "./features/api/jsonplaceholder";
import { provincesApi } from "./features/api/provinces";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = sortKeys({
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [provincesApi.reducerPath]: provincesApi.reducer,
});

export const rootReducer = combineReducers(reducers);

export type RootStore = ReturnType<typeof rootReducer>;
