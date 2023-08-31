import { useEffect, useState } from "react";
import HeaderPokedex from "../components/layout/HeaderPokedex";
import { getAllPokemons, getPokemonsByType } from "../services/pokemons";
import PokemonList from "../pokedex/PokemonList";
import axios from "axios";

// It is pending to move all the logical components to usePokedex.js on hooks

const Pokedex = ({ name }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");

  /*  const handleChangeInput = (e) => {
    setPokemonName(e.target.value);
  };

  const handleChangeSelect = (e) => {
    setPokemonType(e.target.value);
  }; */

  // a function that replaces the above two functions
  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  useEffect(() => {
    if (!pokemonType) {
      getAllPokemons()
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
    }
  }, [pokemonType]);

  useEffect(() => {
    if (pokemonType) {
      //Do the request of the pokemons by type
      getPokemonsByType(pokemonType).then((data) => setPokemons(data));
    }
  }, [pokemonType]);

  return (
    <main>
      <HeaderPokedex />
      <section>
        <p className="text-red-700 font-bold text-lg">
          <span> Welcome {name}, here you can find your favorite pokemon</span>
        </p>
        <form>
          <div className="flex flex-cols-[1fr,1fr] w-full mt-4">
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              className="ml-4 w-[40vw] bg-[lightcyan] border-solid border-[2px] border-black"
              placeholder="Search pokemon ... Pokemon o sagasu ポケモンを探す"
              type="text"
            />
            <select
              className="ml-4"
              value={pokemonType}
              onChange={handleChange(setPokemonType)}
            >
              <option value="">
                All pokemons Subete no pokemon すべてのポケモン
              </option>
              <option value="rock">Rock Rokku ロック</option>
            </select>
          </div>
        </form>
      </section>
      <PokemonList pokemons={pokemonsByName} />
    </main>
  );
};

export default Pokedex;
