import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { doctorsListApi } from "./services/doctorsList";
import doctorsListReducer from "./slices/doctorListSlice";


export const store = configureStore({
  reducer: {
    doctorsList: doctorsListReducer,
    [doctorsListApi.reducerPath]: doctorsListApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(doctorsListApi.middleware),
});

setupListeners(store.dispatch);
