import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import "./App.css";
import PokemonDetail from "./pages/PokemonDetail";
import Page404 from "./pages/Page404";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginTrainer } from "./store/slices/trainer.slice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const login = useCallback((name) => dispatch(loginTrainer(name)), [dispatch]);
  const name =
    useSelector((state) => state.name) || localStorage.getItem("trainer");

  useEffect(() => {
    // update name value
    console.log(name);
  }, [name]);

  return (
    <Routes>
      <Route path="/" element={<Home onSubmit={login} />} />
      <Route element={<PrivateRoutes name={name} />}>
        <Route path="/pokedex" element={<Pokedex name={name} />} />
        <Route path="/pokedex/:pokemonId" element={<PokemonDetail />} />
      </Route>
      (// It does the handling of wrong typed URLs)
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
