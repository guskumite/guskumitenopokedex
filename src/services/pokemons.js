//for getting all pokemons from the API;
// APIからすべてのポケモンを取得します Api kara subete no pokemon o shutoku shimasu

import axios from "axios";

export const getAllPokemons = async () => {
  //Por ahora la vamos a dejar así porque no se tiene paginación por tipo de pokemon y solo trae 20
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=20";
  const { data } = await axios.get(URL);
  return data.results;
};

// to get the pokemons by type

export const getPokemonsByType = async (pokemonType) => {
  const url = `https://pokeapi.co/api/v2/type/${pokemonType}/`;
  const { data } = await axios.get(url);
  const formatPokemons = data.pokemon.map(({ pokemon }) => pokemon);
  return formatPokemons;
};

//asyncronic function to receive a pokemon by its id

export const getPokemonById = async (pokemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  const { data } = await axios.get(url);
  //By generating a format with the specific data needed is possible to stablish a contract
  //to prevent future changes of the data contained in the API
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    weight: data.weight,
    height: data.height,
    abilities: data.abilities,
    moves: data.moves,
  };
  return pokemon;
};

//asyncronic function to receive a pokemon by its URL

export const getPokemonByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  //By generating a format with the specific data needed is possible to stablish a contract
  //to prevent future changes of the data contained in the API
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
  };
  return pokemon;
};

const formatStats = (stats) => {
  return stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat }));
};

const formatTypes = (types) => {
  return types.map((type) => type.type.name);
};

export const joinPokemonTypes = (types = []) => {
  return types.slice(0, 2).join(" / ");
};

export const shortenName = (name) => {
  return name
    .split(" ")
    .map((nemo) => nemo.substring(0, 4) + ".")
    .join(" ");
};
