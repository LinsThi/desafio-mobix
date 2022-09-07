import React, {useState, useCallback} from 'react';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import * as Sty from './styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {navigate} = useNavigation();

  const handleLogin = useCallback(() => {
    console.log(email, password);
    navigate('Home' as never);
  }, [email, password, navigate]);

  const handleTogglePassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  return (
    <Sty.Background>
      <Sty.LogoIMG />
      <Sty.Container>
        <Sty.TextWelcome>Bem-vindo</Sty.TextWelcome>

        <Sty.SubText>Insira os seus dados para acessar</Sty.SubText>

        <Sty.ContainerLogin>
          <Sty.InputLogin
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <Sty.InputLogin
            label="Senha"
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={text => setPassword(text)}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye' : 'eye-off'}
                onPress={handleTogglePassword}
              />
            }
            style={{marginTop: 20}}
          />

          <Sty.ButtonLogin onPress={handleLogin}>Login</Sty.ButtonLogin>
        </Sty.ContainerLogin>
      </Sty.Container>
    </Sty.Background>
  );
}
