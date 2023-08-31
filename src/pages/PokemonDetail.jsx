import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatBarList from "../components/pokemonDetail/StatBarList";
import HeaderPokedex from "../components/layout/HeaderPokedex";
import {
  borderStyledPokemonByType,
  bgStylePokemonType,
} from "../shared/pokemon";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(pokemonData);
  return (
    <main className="flex justify-center items-center w-full">
      <div className="flex flex-col w-full">
        <HeaderPokedex />
        <div className="max-w-[32rem] w-full mx-auto">
          <article className="w-[min(100%,_700px)]">
            <header className="relative mt-32">
              <div
                className={`mb-[2rem] absolute left-1/2 -translate-x-1/2 -bottom-4 h-[65px] w-full aspect-square 
              ${bgStylePokemonType[pokemonData?.types[0]]}`}
              >
                <img
                  className="h-full w-full object-contain h-[128px] -top-[7vh] relative"
                  src={pokemonData?.image}
                  alt=""
                />
              </div>
            </header>
            <section className="">
              <div className="flex flex-col text-center">
                <span className="text-xl font-bold">#{pokemonData?.id}</span>
                <span className="text-3xl font-bold">{pokemonData?.name}</span>
              </div>
              <StatBarList stats={pokemonData?.stats} />
            </section>
          </article>
        </div>
      </div>
    </main>
  );
};

export default PokemonDetail;
