import { useEffect, useState } from "react";
import { getPokemonByUrl, joinPokemonTypes } from "../services/pokemons";
import StatList from "./StatList";
import {
  borderStyledPokemonByType,
  bgStylePokemonType,
} from "../shared/pokemon";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, [pokemonUrl]);

  return (
    <Link
      to={`/pokedex/${pokemonInfo?.id}`}
      className={`text-center capitalize border-[5px] rounded-md ${
        borderStyledPokemonByType[pokemonInfo?.types[0]]
      }`}
    >
      <header
        className={`h-[80px] relative mb-8 ${
          bgStylePokemonType[pokemonInfo?.types[0]]
        }`}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[65px] aspect-square text-xs">
          <img
            className="h-full w-full object-contain"
            src={pokemonInfo?.image || "/imagenotfound.png"}
            alt=""
          />
          {pokemonInfo?.image ? "" : "Image not found"}
        </div>
      </header>
      <section>
        <h3 className="text-lg font-bold pt-3">{pokemonInfo?.name}</h3>
        <h4>{joinPokemonTypes(pokemonInfo?.types)}</h4>
        <h5 className="text-sm mb-2">Types</h5>
        <hr />
        <StatList stats={pokemonInfo?.stats} />
      </section>
    </Link>
  );
};

export default PokemonCard;
