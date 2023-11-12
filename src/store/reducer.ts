import sortKeys from "sort-object-keys";

import { jsonPlaceholderApi } from "./features/api/jsonplaceholder";

import { combineReducers } from "@reduxjs/toolkit";

const reducers = sortKeys({
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
});

export const rootReducer = combineReducers(reducers);

export type RootStore = ReturnType<typeof rootReducer>;
