import * as React from 'react';
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

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name="HomeNavi" component={HomeNavi} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
