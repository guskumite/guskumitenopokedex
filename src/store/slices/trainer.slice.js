import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://users-crud.academlo.tech";

const createUser = (data) => {
  const URL = BASE_URL + "/users/";

  axios
    .post(URL, data)
    .then(() => {
      return "ok";
    })
    .catch((err) => console.log(err));
};

const initialState = {
  name: "",
};

const trainerSlice = createSlice({
  initialState,
  name: "trainer",
  reducers: {
    loginTrainer: (state, action) => {
      const newName = action.payload;
      state.name = newName;
      let data = {
        email: "noexisteeseurl@gmail.com",
        password: "x",
        first_name: state.name,
        last_name: "x",
        birthday: null,
        image_url: "x",
      };
      createUser(data);
    },
  },
});

export const { loginTrainer } = trainerSlice.actions;

export default trainerSlice.reducer;
