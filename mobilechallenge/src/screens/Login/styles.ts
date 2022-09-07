import styled from 'styled-components/native';
import {TextInput, Button} from 'react-native-paper';
import background from '../../assets/background.png';
import logo from '../../assets/logo.png';

export const Background = styled.ImageBackground.attrs({source: background})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 80%;
  height: 50%;
  border-radius: 20px;
  background-color: #fff;

  padding: 20px 20px;
`;

export const ContainerLogin = styled.View`
  margin-top: 30px;
`;

export const LogoIMG = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 300px;
  height: 88px;

  margin-bottom: 90px;
`;

export const TextWelcome = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const SubText = styled.Text`
  font-size: 14px;
  font-weight: 300px;
  color: #000;
`;

export const InputLogin = styled(TextInput).attrs({
  activeUnderlineColor: '#0000ff',
})``;

export const ButtonLogin = styled(Button).attrs({
  buttonColor: '#2E6EB5',
  textColor: '#fff',
})`
  padding: 10px 0;

  margin-top: 50px;
`;
