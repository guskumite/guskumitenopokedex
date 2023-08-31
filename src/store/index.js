import { configureStore } from "@reduxjs/toolkit";
import trainerReducer from "./slices/trainer.slice";

export default configureStore({
  reducer: {
    trainer: trainerReducer,
  },
});
