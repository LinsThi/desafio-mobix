import React from 'react';
import {TextInputProps} from 'react-native';

import * as Sty from './styles';

type SearchProps = TextInputProps;

export function SearchBar({...rest}: SearchProps) {
  return (
    <Sty.Container>
      <Sty.TextInput placeholder="Buscar Pokémon" {...rest} />
    </Sty.Container>
  );
}
