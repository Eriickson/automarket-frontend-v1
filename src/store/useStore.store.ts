// import { createLogger } from "redux-logger";

// const logger = createLogger({
//   predicate: () => process.env.NODE_ENV === "development" && typeof window !== "undefined",
// });
import { TypedUseSelectorHook, useSelector as _useSelector } from "react-redux";

import { authApi } from "./features/api/auth";
import { dealerBranchesApi } from "./features/api/dealer-branches";
import { jsonPlaceholderApi } from "./features/api/jsonplaceholder";
import { municipalitiesApi } from "./features/api/municipalities";
import { provincesApi } from "./features/api/provinces";
import { sectorsApi } from "./features/api/sectors";
import { rootReducer } from "./reducer";
import { RootStore } from "./reducer";
import { configureStore, isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { RejectedAction } from "@reduxjs/toolkit/dist/query/core/buildThunks";

export const useStore = () => {
  const rtkQueryErrorLogger: Middleware = () => (next) => (action: RejectedAction<any, any>) => {
    if (isRejectedWithValue(action)) {
    }

    return next(action);
  };

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat(
        rtkQueryErrorLogger,
        jsonPlaceholderApi.middleware,
        authApi.middleware,
        provincesApi.middleware,
        municipalitiesApi.middleware,
        sectorsApi.middleware,
        dealerBranchesApi.middleware
      ),
  });

  return { store };
};

export const useSelector: TypedUseSelectorHook<RootStore> = _useSelector;
