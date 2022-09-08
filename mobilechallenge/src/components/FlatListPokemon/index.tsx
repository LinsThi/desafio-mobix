import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ActivityIndicator} from 'react-native';
import {
  BackgroundColorPokemonType,
  PokemonProps,
  PropsKeyColor,
} from '../../dtos/Pokemon';

import * as Sty from './styles';

type FlatListProps = {
  arrayPoke: PokemonProps[];
  RequestAPI: () => void;
};

export function FlatListPokemon({arrayPoke, RequestAPI}: FlatListProps) {
  const {navigate} = useNavigation();

  const renderItem = useCallback(({item}: {item: PokemonProps}) => {
    const type = item.types[0].type.name;

    return (
      <Sty.ContainerItem
        bgColor={BackgroundColorPokemonType[type as PropsKeyColor]}
        onPress={() => navigate('Pokemon', {pokemonInfo: item})}>
        <Sty.ImagePokemon
          source={{uri: item.sprites.other['official-artwork'].front_default}}
        />

        <Sty.ContainerNamePokemon>
          <Sty.NamePokemon>{item.name}</Sty.NamePokemon>
        </Sty.ContainerNamePokemon>
      </Sty.ContainerItem>
    );
  }, []);

  return (
    <Sty.Container>
      <Sty.FlatList
        data={arrayPoke}
        extraarrayPoke={arrayPoke}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={RequestAPI}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<ActivityIndicator />}
      />
    </Sty.Container>
  );
}
