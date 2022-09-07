import styled from 'styled-components/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const ContainerSearch = styled.View`
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  margin-top: 20px;

  align-items: center;
`;

export const ContainerList = styled.View`
  margin-top: 30px;
`;

export const LogoIMG = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 130px;
  height: 45px;

  margin-top: 17px;
`;

export const ButtonFilter = styled.TouchableOpacity``;

export const Icon = styled(FontAwesome5).attrs({
  name: 'sliders',
  color: '#000',
  size: 28,
})``;
