import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

import * as Sty from './styles';

import {SearchBar} from '../../components/SearchBar';
import {FlatListPokemon} from '../../components/FlatListPokemon';
import {PokemonProps} from '../../dtos/Pokemon';
import {ResponseProps} from '../../dtos/Request';
import {ActivityIndicator} from 'react-native';

export function Home() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [pokemonArray, setPokemonArray] = useState<PokemonProps[]>([]);

  const loadingRequestAPI = useCallback(() => {
    // setLoading(true);

    axios.get(nextUrl).then((response: ResponseProps) => {
      const arrayPoke: PokemonProps[] = [...pokemonArray];
      setNextUrl(response.data.next);

      async function GetInfoPokemons() {
        for (const poke of response.data.results) {
          const {data} = await axios.get(poke.url);
          arrayPoke.push(data);
        }

        setPokemonArray(arrayPoke);
        // setLoading(false);
      }

      GetInfoPokemons();
    });
  }, [pokemonArray, nextUrl]);

  useEffect(() => {
    loadingRequestAPI();
  }, []);

  return (
    <Sty.Container>
      <Sty.LogoIMG />

      <Sty.ContainerSearch>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          onEndEditing={() => console.log(search)}
        />

        <Sty.ButtonFilter>
          <Sty.Icon />
        </Sty.ButtonFilter>
      </Sty.ContainerSearch>

      <Sty.ContainerList>
        {!loading ? (
          <FlatListPokemon
            arrayPoke={pokemonArray}
            RequestAPI={loadingRequestAPI}
          />
        ) : (
          <ActivityIndicator />
        )}
      </Sty.ContainerList>
    </Sty.Container>
  );
}
