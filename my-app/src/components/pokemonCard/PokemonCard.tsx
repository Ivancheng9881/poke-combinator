import React, { useState, useEffect } from 'react';
import { IPokedex, ISprites } from '../../types';
import './PokemonCard.css';

export default function PokemonCard({ data }: { data: IPokedex[] }) {
  const [pokemon, setPokemon] = useState<ISprites[]>([]);

  useEffect(() => {
    const pokemonDataArray: ISprites[] = [];
    if (data && data.length > 0) {
      data.forEach((pokemonData) => {
        const pokemonName = pokemonData.name.english;
        const spriteUrl =
          `https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/${pokemonName}.png`.toLowerCase();
        const obj: ISprites = {
          id: pokemonData.id,
          name: pokemonData.name,
          url: spriteUrl,
        };
        pokemonDataArray.push(obj);
      });
    }
    setPokemon(pokemonDataArray);
    console.log(pokemon);
  });
  return (
    <div className="container">
      {pokemon &&
        pokemon.map((obj: ISprites) => {
          return (
            <div key={obj.id} className="spriteContainer">
              <div>{obj.id}</div>
              <img className="spriteImage" src={obj.url} alt="" />
              <div>{obj.name.english}</div>
            </div>
          );
        })}
    </div>
  );
}
