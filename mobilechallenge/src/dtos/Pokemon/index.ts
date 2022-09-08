export type SpritesProps = {
  front_default: string;
};

export type PokemonProps = {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': SpritesProps;
    };
  };
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
  height: number;
  abilities: [
    {
      ability: {
        name: string;
      };
    },
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
};

export type SpeciesProps = {
  egg_groups: [
    {
      name: string;
    },
  ];
  evolves_from_species: {
    name: string | null;
  };
};

export const BackgroundColorPokemonType = {
  normal: '#A8A77A',
  fighting: '#C22E28',
  flying: '#A98FF3',
  poison: '#A33EA1',
  ground: '#E2BF65',
  rock: '#B6A136',
  bug: '#A6B91A',
  ghost: '#735797',
  steel: '#B7B7CE',
  fire: '#EE8130',
  water: '#6390F0',
  grass: '#7AC74C',
  electric: '#F7D02C',
  psychic: '#F95587',
  ice: '#96D9D6',
  dragon: '#6F35FC',
  dark: '#705746',
  fairy: '#D685AD',
  unknown: '#339686',
  shadow: '#632ea6',
};

export type PropsKeyColor = keyof typeof BackgroundColorPokemonType;
