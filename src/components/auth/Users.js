import axios from "axios";

const Users = () => {
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
};

export default Users;
