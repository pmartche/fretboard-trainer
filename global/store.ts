import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slices/noteSlice";

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
