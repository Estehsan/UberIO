import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {withAuthenticator} from 'aws-amplify-react-native';
import Profile from './src/screens/Profile';
import AuthContextProvider from './src/context/AuthContext';
import {useAuthContext} from './src/context/AuthContext';
import BottomTabNavi from './src/navigation/BottomTabNavi';

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BottomTabNavi />
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
