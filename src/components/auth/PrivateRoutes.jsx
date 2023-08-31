// PrivateRoutes.jsx
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://users-crud.academlo.tech";

const PrivateRoutes = ({ name }) => {
  const [navigate, setNavigate] = useState(null);
  let isValidUser = false;

  if (name) {
    if (name.length === 0) {
      setNavigate(<Navigate to="/" />);
    }
  }

  useEffect(() => {
    const scramble = (text) => {
      let result = [];
      for (let iterator = 0; iterator < text.length; iterator++) {
        result.push(256 - text.charCodeAt(iterator));
      }
      return result.join("|");
    };

    const unscramble = (text) => {
      let result = text.split("|");
      let result2 = "";
      for (let iterator = 0; iterator < result.length; iterator++) {
        result2 += String.fromCharCode(
          (parseInt(result[iterator], 10) - 256) * -1
        );
      }
      return result2;
    };

    // To get a list of valid users apply the unscramble function:
    // console.log(unscramble("182|139|146|151|145|142")); => Junior
    // console.log(unscramble('188|159|146|151|155|148')); => Daniel

    const validUsers = [
      "182|139|146|151|145|142",
      "185|139|141|140|159|138|145",
      "179|159|142|151|159",
      "176|155|156|142|145",
      "179|159|140|155|145",
      "188|159|146|151|155|148",
      "191|148|155|150|159|146|156|142|145",
      "179|151|153|139|155|148",
      "173|155|158|159|141|140|151|159|146",
      "188|151|155|153|145",
      "179|159|142|157|145",
      "176|159|158|148|145",
      "190|142|139|146|145",
      "187|146|142|151|143|139|155",
      "191|156|142|151|159|146",
      "179|159|146|139|155|148",
      "174|145|158|155|142|140|145",
      "186|155|142|146|159|146|156|145",
      "174|151|157|159|142|156|145",
      "179|159|142|140|151|146",
      "188|159|147|151|159|146",
      "178|151|157|145|148|159|141",
      "185|155|142|159|142|156|145",
      "173|145|154|151|159",
      "170|159|148|155|142|151|159",
      "189|159|147|151|148|159",
      "179|159|142|140|151|146|159",
      "188|159|146|151|155|148|159",
      "180|139|157|151|159",
      "182|139|148|151|159",
      "187|147|147|159",
      "176|159|139|148|159",
      "170|151|157|140|145|142|151|159",
      "191|146|153|155|148|159",
      "189|159|147|151|148|159",
      "187|148|155|146|159",
      "191|146|156|142|155|159",
      "182|151|147|155|146|159",
      "178|159|140|159|148|151|159",
      "189|159|142|148|159",
      "170|159|148|155|146|140|151|146|159",
      "185|159|158|142|151|155|148|159",
      "191|146|140|145|146|151|159",
    ];

    let validU = [];
    for (let cycle = 0; cycle < validUsers.length; cycle++) {
      validU.push(unscramble(validUsers[cycle]));
    }
    localStorage.setItem("validUsers", validU);

    const getAllUsers = async () => {
      try {
        const name2 = localStorage.getItem("trainer");
        if (name2) {
          for (let looper = 0; looper < validUsers.length; looper++) {
            if (
              name2.toUpperCase() ===
              unscramble(validUsers[looper]).toUpperCase()
            ) {
              isValidUser = true;
              break;
            }
          }
        }
        if (isValidUser) {
          setNavigate(<Outlet />);
        } else {
          setNavigate(<Navigate to="/" />);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (name?.length > 0) getAllUsers();
    else setNavigate(<Navigate to="/" />);
  }, []);

  return navigate;
};
export default PrivateRoutes;
