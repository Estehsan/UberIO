import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import {withAuthenticator} from 'aws-amplify-react-native';
import RestaurantDetail from './src/screens/HomeScreens/RestaurantDetail';
import DishDetailPage from './src/screens/HomeScreens/DishDetailPage';
import Profile from './src/screens/Profile';
import AuthContextProvider from './src/context/AuthContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavi from './src/navigation/HomeNavi';
import {useAuthContext} from './src/context/AuthContext';
import BottomTabNavi from './src/navigation/BottomTabNavi';
function App() {
  // const {dbUser} = useAuthContext();

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <BottomTabNavi />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

export default withAuthenticator(App);
