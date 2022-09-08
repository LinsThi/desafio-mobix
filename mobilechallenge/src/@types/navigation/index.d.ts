import {PokemonProps} from '../../dtos/Pokemon';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Pokemon: {pokemonInfo: PokemonProps};
      Login: undefined;
    }
  }
}
