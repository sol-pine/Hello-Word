import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "../redux/CardSlice";

const store = configureStore({
  reducer: {
    Card: CardSlice,
  },
});

export default store;
