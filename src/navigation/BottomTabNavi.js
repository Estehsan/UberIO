import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeNavi from './HomeNavi';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAuthContext} from '../context/AuthContext';
const Tab = createBottomTabNavigator();

const BottomTabNavi = () => {
  const {dbUser} = useAuthContext();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {dbUser ? (
        <>
          <Tab.Screen name="Home" component={HomeNavi} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <Tab.Screen name="Profile" component={Profile} />
      )}
    </Tab.Navigator>
  );
};

export default BottomTabNavi;

const styles = StyleSheet.create({});
