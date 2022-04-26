import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Image,
  useColorScheme,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {DataStore} from 'aws-amplify';
import {Dish, Restaurant} from '../../models';
import {DarkBg, GlobalCSS, H1, H2} from '../../components/basic';
import {theme} from '../../theme';

const RestaurantDetail = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [restaurant, setRestaurant] = React.useState(null);
  const [dishes, setDishes] = React.useState(null);
  const route = useRoute();

  const navigation = useNavigation();

  console.log('This is Deatils ===> ', dishes);

  const id = route.params?.id;

  useEffect(() => {
    // fetch restaurant by id
    DataStore.query(Restaurant, id).then(setRestaurant);
    // fetch dishes by restaurant id
    DataStore.query(Dish, dish => dish.restaurantID('eq', id)).then(setDishes);
  }, []);

  return (
    <DarkBg>
      <Image
        style={{width: '100%', height: 200}}
        source={{uri: restaurant?.image}}
      />
      <View style={[GlobalCSS.padding.ymd, GlobalCSS.padding.xmd]}>
        <H1>{restaurant?.name}</H1>
        <Text>{restaurant?.deliveryFee.toFixed(1)}</Text>
        <Text>
          {restaurant?.minDeliveryTime}-{restaurant?.maxDeliveryTime}
        </Text>
        <H2>{dishes?.length} Dishes </H2>
        <FlatList
          data={dishes}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DishDetailPage', {id: item.id})
              }
              style={[
                GlobalCSS.row,
                GlobalCSS.alignItemsCenter,
                GlobalCSS.justifyBetween,
                ,
                {
                  backgroundColor: isDarkMode
                    ? theme.colors.grey
                    : theme.colors.accent,
                  ...theme.customShadow2,
                },
              ]}>
              <View style={styles.dishInfo}>
                <H1 style={styles.dishName}>{item.name}</H1>
                <H2 style={styles.dishDescription}>{item.description}</H2>
                <H2 style={styles.dishPrice}>{item.price}</H2>
              </View>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={{uri: item.image}}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </DarkBg>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
