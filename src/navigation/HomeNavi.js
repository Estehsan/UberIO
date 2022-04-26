import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import RestaurantDetail from '../screens/HomeScreens/RestaurantDetail';
import DishDetailPage from '../screens/HomeScreens/DishDetailPage';
const Stack = createNativeStackNavigator();

const HomeNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      <Stack.Screen name="DishDetailPage" component={DishDetailPage} />
    </Stack.Navigator>
  );
};

export default HomeNavi;

const styles = StyleSheet.create({});
