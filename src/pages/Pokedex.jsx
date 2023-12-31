import { useEffect, useState } from "react";
import HeaderPokedex from "../components/layout/HeaderPokedex";
import { getAllPokemons, getPokemonsByType } from "../services/pokemons";
import PokemonList from "../pokedex/PokemonList";
import { paginateData } from "../utils/pagination";
import Pagination from "../pokedex/Pagination";
import FooterPokeball from "../components/layout/FooterPokeball";

// It is pending to move all the logical components to usePokedex.js on hooks

const Pokedex = ({ name }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [currentPage, setcurrentPage] = useState(1);

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
      getPokemonsByType(pokemonType).then((data) => {
        setcurrentPage(1);
        setPokemons(data);
      });
    }
  }, [pokemonType]);

  const { itemsInCurrentPage, LastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

  return (
    <main className="w-[99%]">
      <HeaderPokedex />
      <section>
        <p className="text-red-700 font-bold text-lg">
          <span> Welcome {name}, here you can find your favorite pokemon</span>
        </p>
        <form className="w-[99%]">
          <div className="flex flex-cols-[1fr,1fr] w-full mt-4">
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              className="ml-4 w-[40vw] bg-[lightcyan] border-solid border-[2px] border-black"
              placeholder="Search pokemon ... Pokemon o sagasu ポケモンを探す"
              type="text"
            />
            <select
              className="ml-4 w-[45%] text-sm"
              value={pokemonType}
              onChange={handleChange(setPokemonType)}
            >
              <option value="">All Subete no pokemon すべてのポケモン</option>
              <option value="rock">Rock Rokku ロック</option>
              <option value="grass">Grass Kusa 草</option>
              <option value="fire">Fire Hi 火</option>
              <option value="water">Water Mizu 水</option>
              <option value="bug">Bug Bagu バグ</option>
              <option value="normal">Normal Futsü 普通</option>
              <option value="ground">Ground Jimen 地面</option>
              <option value="steel">Steel Kötetsu 鋼鉄</option>
              <option value="ice">Ice Köri 氷</option>
              <option value="dark">Dark Kurai 暗い</option>
              <option value="poison">Poison Doku 毒</option>
            </select>
          </div>
        </form>
      </section>

      <Pagination
        LastPage={LastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setcurrentPage={setcurrentPage}
        currentPage={currentPage}
      />

      <PokemonList pokemons={itemsInCurrentPage} />

      <Pagination
        LastPage={LastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setcurrentPage={setcurrentPage}
        currentPage={currentPage}
      />
      <FooterPokeball name={name} />
    </main>
  );
};

export default Pokedex;
