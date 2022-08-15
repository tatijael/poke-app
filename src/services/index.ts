import axios from 'axios';

const POKE_API = process.env.REACT_APP_POKEAPI

const getPokemon = async (name: string) => {
  const {} = await axios.get(`${POKE_API}/${name}`)
}