import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window');

const CalcHeight = height / 6;

type ContainerProps = {
  bgColor: string;
};

export const Container = styled.View`
  flex: 1;
`;

export const ContainerItem = styled.TouchableOpacity<ContainerProps>`
  width: ${width / 2.2}px;
  height: ${CalcHeight}px;
  margin-right: 10px;
  margin-bottom: 28px;

  justify-content: center;
  align-items: center;
  overflow: visible;
  background-color: ${({bgColor}) => bgColor || '#3f3f3f'};
  border-radius: 20px;
`;

export const ContainerNamePokemon = styled.View`
  background-color: #676767;
  padding: 0 20px;
  margin-bottom: 20px;
  border-radius: 10px;

  position: absolute;
  bottom: 0px;
`;

export const ImagePokemon = styled.Image`
  width: 150px;
  height: 100px;

  position: absolute;
  top: -30px;
`;

export const NamePokemon = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-transform: capitalize;
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: 30,
    paddingBottom: CalcHeight,
  },
  numColumns: 2,
})``;
