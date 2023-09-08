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

  let ability1 = "";
  let ability2 = "";
  ability1 = pokemonData?.abilities[0].ability.name;
  if (pokemonData?.abilities.length > 1)
    ability2 = pokemonData?.abilities[1].ability.name;
  let type1 = "";
  let type2 = "";
  type1 = pokemonData?.types[0];
  if (pokemonData?.types.length > 1) type2 = pokemonData?.types[1];

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
              <div className="flex flex-col text-center relative">
                <span className="absolute left-1/2 -translate-x-1/2 top-5 text-xl font-bold border-2 w-16 border-blue-200">
                  #{pokemonData?.id}
                </span>
                <div className="relative flex flex-row">
                  <span className="absolute border-t-2 top-[7rem] left-[0.5rem] border-gray-200 w-[20vw]"></span>
                  <span className="mb-8 absolute top-10 left-1/2 translate-y-3/4 -translate-x-1/2 text-3xl font-bold">
                    {pokemonData?.name}
                  </span>
                  <span className="absolute border-t-2 top-[7rem] right-[0.5rem] border-gray-200 w-[20vw]"></span>
                </div>
                <div className="relative flex flex-row">
                  <div className="absolute flex-flex-col w-[20vw]">
                    <div className="relative top-[120px] left-[2.5rem]">
                      Weight:
                    </div>
                    <div className="relative top-[130px] left-[2.5rem]">
                      {pokemonData?.weight}
                    </div>
                  </div>
                  <div className="absolute flex flex-col w-[20vw] right-[5.5rem]">
                    <div className="relative top-[120px] ">Height:</div>
                    <div className="relative top-[130px] left-[6rem]">
                      {pokemonData?.height}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-60  flex flex-row">
                  <span className="relative font-bold text-xl left-[5vw]">
                    Type
                  </span>
                  <span
                    className={`w-[10vw] relative font-bold text-md -left-10 top-[50px] border-2
                  ${bgStylePokemonType[pokemonData?.types[0]]}`}
                  >
                    {" "}
                    {type1}{" "}
                  </span>
                  <span
                    className={`w-[10vw] relative font-bold text-md top-[50px] border-2
                  ${bgStylePokemonType[pokemonData?.types[0]]}`}
                  >
                    {" "}
                    {type2}{" "}
                  </span>
                  <span className="relative font-bold text-xl left-[20vw]">
                    Abilities
                  </span>
                  <span
                    className={`-right-10 w-[10vw] relative font-bold text-md top-[50px] border-2
                  ${bgStylePokemonType[pokemonData?.types[0]]}`}
                  >
                    {" "}
                    {ability1}{" "}
                  </span>
                  <span
                    className={`-right-20 w-[10vw] relative font-bold text-md top-[50px] border-2
                  ${bgStylePokemonType[pokemonData?.types[0]]}`}
                  >
                    {" "}
                    {ability2}{" "}
                  </span>
                </div>
              </div>
              <div className="mt-[330px] ml-[0.5ren] mr-[0.5rem]">
                <StatBarList stats={pokemonData?.stats} />
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
};

export default PokemonDetail;
