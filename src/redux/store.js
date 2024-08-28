import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // додавання редюсера контактів до store
    // filter: filterReducer,
  },
});
