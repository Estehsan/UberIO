import {StyleSheet, Text, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import RestaurantList from '../components/RestaurantList';
import {Restaurant} from '../models';
import {DataStore} from 'aws-amplify';

const data = [
  {
    id: '1',
    name: 'Restaurant 1',
    description: 'Description 1',
    image: 'https://picsum.photos/200',
    rating: 4,
    price: '$',
  },
  {
    id: '2',
    name: 'Restaurant 2',
    description: 'Description 2',
    image: 'https://picsum.photos/200',
    rating: 3,
    price: '$$',
  },
];

export default function Home({navigation}) {
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants);

  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({item}) => <RestaurantList restaurant={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
