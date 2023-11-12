// import { createLogger } from "redux-logger";

import { jsonPlaceholderApi } from "./features/api/jsonplaceholder";
import { rootReducer } from "./reducer";
import { configureStore, isRejectedWithValue, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

// const logger = createLogger({
//   predicate: () => process.env.NODE_ENV === "development" && typeof window !== "undefined",
// });

import { TypedUseSelectorHook, useSelector as _useSelector } from "react-redux";

import { RootStore } from "./reducer";
import { RejectedAction } from "@reduxjs/toolkit/dist/query/core/buildThunks";
import { authApi } from "./features/api/auth";

export const useStore = () => {
  const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: RejectedAction<any, any>) => {
    if (isRejectedWithValue(action)) {
    }

    return next(action);
  };

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat(rtkQueryErrorLogger, jsonPlaceholderApi.middleware, authApi.middleware),
  });

  return { store };
};

export const useSelector: TypedUseSelectorHook<RootStore> = _useSelector;
