import sortKeys from "sort-object-keys";

import { jsonPlaceholderApi } from "./features/api/jsonplaceholder";

import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./features/api/auth";

const reducers = sortKeys({
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const rootReducer = combineReducers(reducers);

export type RootStore = ReturnType<typeof rootReducer>;
