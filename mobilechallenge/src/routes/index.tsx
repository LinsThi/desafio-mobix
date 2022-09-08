import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../screens/Login';
import {Home} from '../screens/Home';
import {useAppSelector} from '../store/hooks/useSelectorApp';

const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

export function AppRoutes() {
  const {isLogged} = useAppSelector(store => store.user);

  return (
    <NavigationContainer>
      {isLogged ? (
        <HomeStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
      ) : (
        <LoginStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Login">
          <LoginStack.Screen name="Login" component={Login} />
        </LoginStack.Navigator>
      )}
    </NavigationContainer>
  );
}
