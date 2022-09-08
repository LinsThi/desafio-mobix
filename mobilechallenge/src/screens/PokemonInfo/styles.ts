import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {BackgroundColorPokemonType, PropsKeyColor} from '../../dtos/Pokemon';

const {height} = Dimensions.get('window');

const Heightevice = height / 4;

type ContainerProps = {
  bgColor: string;
};

type ButtonProps = {
  isSelected?: boolean;
  type: string;
};

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const ContainerHeader = styled.View`
  width: 100%;
`;

export const ContainerTypes = styled.View`
  flex-direction: row;
`;

export const ContainerPokemon = styled.View`
  flex: 1;
`;

export const ContainerImage = styled.View<ContainerProps>`
  margin-top: 50px;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 20px;

  width: 100%;
  height: ${Heightevice}px;

  align-items: center;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ContainerTableInfo = styled.ScrollView`
  flex: 1;
`;

export const Button = styled.TouchableOpacity``;

export const IconBack = styled(AntDesign).attrs({
  name: 'arrowleft',
  color: '#000',
  size: 28,
})``;

export const NamePokemon = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #3f3f3f;
  text-transform: capitalize;

  margin: 20px 0;
`;

export const TypePokemon = styled.Text<ContainerProps>`
  background: ${({bgColor}) => bgColor};
  padding: 5px 10px;
  border-radius: 40px;

  margin-right: 10px;

  text-transform: capitalize;
  color: #fff;
  font-size: 14px;
`;

export const ImagePokemon = styled.Image`
  width: 220px;
  height: 220px;

  position: absolute;
  top: -50px;
`;

export const ButtonInfo = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  border-bottom-width: 2px;
  border-bottom-color: ${({isSelected, type}) =>
    isSelected ? BackgroundColorPokemonType[type as PropsKeyColor] : '#c0c0c0'};

  padding: 10px 0;
`;

export const ButtonInfoText = styled.Text<ButtonProps>`
  font-size: 20px;
  color: ${({isSelected}) =>
    isSelected ? '#5E5E5E' : 'rgba(94, 94, 94, 0.4)'};
  font-weight: ${({isSelected}) => (isSelected ? 'bold' : 'normal')};
  text-align: center;
`;

export const LineInfo = styled.View`
  padding: 10px 20px;
  flex-direction: row;
`;

export const TextColumnType = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #9a9a9a;
  text-transform: capitalize;
  width: 40%;
`;

export const TextColumnResult = styled.Text.attrs({numberOfLines: 2})`
  font-size: 20px;
  color: #5e5e5e;
  text-transform: capitalize;
  margin-right: 95px;
`;

export const Loading = styled.ActivityIndicator``;
