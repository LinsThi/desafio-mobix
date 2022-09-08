import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState, useCallback} from 'react';
import {
  BackgroundColorPokemonType,
  PokemonProps,
  PropsKeyColor,
  SpeciesProps,
} from '../../dtos/Pokemon';

import * as Sty from './styles';

type ParamList = {
  item: {
    pokemonInfo: PokemonProps;
  };
};

export function PokemonInfo() {
  const [infoSelected, setInfoSelected] = useState<
    'Sobre' | 'Status' | 'Evolução'
  >('Sobre');
  const [specieInfo, setSpecieInfo] = useState<SpeciesProps>(
    {} as SpeciesProps,
  );

  const route = useRoute<RouteProp<ParamList, 'item'>>();
  const {pokemonInfo} = route.params;

  const {goBack} = useNavigation();

  const type = pokemonInfo.types[0].type.name;
  const habilities = pokemonInfo.abilities.map(item => {
    return item.ability.name;
  });

  const handleSelectedInfo = useCallback(
    (info: 'Sobre' | 'Status' | 'Evolução') => {
      setInfoSelected(info);
    },
    [],
  );

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonInfo.id}`)
      .then(response => {
        const {data} = response;
        setSpecieInfo(data);
      });
  }, [pokemonInfo.id]);

  return (
    <Sty.Container>
      <Sty.ContainerHeader>
        <Sty.Button onPress={() => goBack()}>
          <Sty.IconBack />
        </Sty.Button>

        <Sty.NamePokemon>{pokemonInfo.name}</Sty.NamePokemon>

        <Sty.ContainerTypes>
          {pokemonInfo.types.map(typePok => (
            <Sty.TypePokemon
              bgColor={BackgroundColorPokemonType[type as PropsKeyColor]}>
              {typePok.type.name}
            </Sty.TypePokemon>
          ))}
        </Sty.ContainerTypes>
      </Sty.ContainerHeader>

      <Sty.ContainerPokemon>
        <Sty.ContainerImage
          bgColor={BackgroundColorPokemonType[type as PropsKeyColor]}>
          <Sty.ImagePokemon
            source={{
              uri: pokemonInfo.sprites.other['official-artwork'].front_default,
            }}
            resizeMode="stretch"
          />
        </Sty.ContainerImage>

        <Sty.ContainerButtons>
          <Sty.ButtonInfo
            isSelected={infoSelected === 'Sobre'}
            onPress={() => handleSelectedInfo('Sobre')}
            type={type}>
            <Sty.ButtonInfoText isSelected={infoSelected === 'Sobre'}>
              Sobre
            </Sty.ButtonInfoText>
          </Sty.ButtonInfo>

          <Sty.ButtonInfo
            isSelected={infoSelected === 'Status'}
            onPress={() => handleSelectedInfo('Status')}
            type={type}>
            <Sty.ButtonInfoText isSelected={infoSelected === 'Status'}>
              Status
            </Sty.ButtonInfoText>
          </Sty.ButtonInfo>

          <Sty.ButtonInfo
            isSelected={infoSelected === 'Evolução'}
            onPress={() => handleSelectedInfo('Evolução')}
            type={type}>
            <Sty.ButtonInfoText isSelected={infoSelected === 'Evolução'}>
              Evolução
            </Sty.ButtonInfoText>
          </Sty.ButtonInfo>
        </Sty.ContainerButtons>

        {Object.keys(specieInfo).length > 0 ? (
          infoSelected === 'Sobre' ? (
            <Sty.ContainerTableInfo>
              <Sty.LineInfo>
                <Sty.TextColumnType>Espécie</Sty.TextColumnType>
                <Sty.TextColumnResult>
                  {specieInfo.egg_groups[specieInfo.egg_groups.length - 1].name}
                </Sty.TextColumnResult>
              </Sty.LineInfo>

              <Sty.LineInfo>
                <Sty.TextColumnType>Tamanho</Sty.TextColumnType>
                <Sty.TextColumnResult>
                  {pokemonInfo.height / 10}m
                </Sty.TextColumnResult>
              </Sty.LineInfo>

              <Sty.LineInfo>
                <Sty.TextColumnType>Habilidades</Sty.TextColumnType>
                <Sty.TextColumnResult>
                  {habilities.toString()}
                </Sty.TextColumnResult>
              </Sty.LineInfo>

              <Sty.LineInfo>
                <Sty.TextColumnType>Gênero</Sty.TextColumnType>
                <Sty.TextColumnResult>Dragão</Sty.TextColumnResult>
              </Sty.LineInfo>
            </Sty.ContainerTableInfo>
          ) : infoSelected === 'Status' ? (
            <Sty.ContainerTableInfo>
              {pokemonInfo.stats.map(currentStat => (
                <Sty.LineInfo>
                  <Sty.TextColumnType>
                    {currentStat.stat.name}
                  </Sty.TextColumnType>
                  <Sty.TextColumnResult>
                    {currentStat.base_stat}
                  </Sty.TextColumnResult>
                </Sty.LineInfo>
              ))}
            </Sty.ContainerTableInfo>
          ) : (
            <Sty.ContainerTableInfo>
              <Sty.LineInfo>
                <Sty.TextColumnType>Previous</Sty.TextColumnType>
                <Sty.TextColumnResult>
                  {specieInfo.evolves_from_species
                    ? specieInfo.evolves_from_species.name
                    : 'None'}
                </Sty.TextColumnResult>
              </Sty.LineInfo>
            </Sty.ContainerTableInfo>
          )
        ) : (
          <Sty.Loading />
        )}
      </Sty.ContainerPokemon>
    </Sty.Container>
  );
}
