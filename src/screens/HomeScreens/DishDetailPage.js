import {StyleSheet, Text, View, Pressable, useColorScheme} from 'react-native';
import React from 'react';
import {DarkBg, GlobalCSS, H1, WhiteBtn} from '../../components/basic';
import {DataStore} from 'aws-amplify';
import {Dish} from '../../models';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {WhiteRoundBtn} from '../../components/Common';
import {Button} from 'react-native-paper';

const DishDetailPage = ({route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  const [dish, setDish] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);
  const {id} = route.params;
  React.useEffect(() => {
    if (!id) {
      return;
    }
    if (id) {
      DataStore.query(Dish, id).then(setDish);
    }
  }, [id]);

  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onBack = () => {
    navigation.goBack();
  };
  const getTotal = () => {};
  console.log('These are the <<<==', dish);
  return (
    <DarkBg>
      <H1>{dish?.name}</H1>
      <H1>{dish?.description}</H1>

      <View
        style={[
          GlobalCSS.row,
          GlobalCSS.justifyEvenly,
          GlobalCSS.alignItemsCenter,
        ]}>
        <WhiteRoundBtn onPress={onMinus}>
          <H1 size={40} lineHeight={40}>
            -
          </H1>
        </WhiteRoundBtn>

        <H1 style={styles.quantity}>{quantity}</H1>
        <WhiteRoundBtn onPress={onPlus}>
          <H1 size={40} lineHeight={40}>
            +
          </H1>
        </WhiteRoundBtn>

        <Pressable
          onPress={() => navigation.navigate('Basket')}
          style={styles.button}></Pressable>
      </View>
      <Button
        mode="contained"
        color={isDarkMode ? 'white' : 'black'}
        style={{width: 200}}
        onPress={() => console.log('Pressed')}>
        Add {quantity} to basket &#8226; ${getTotal()}
      </Button>
    </DarkBg>
  );
};

export default DishDetailPage;

const styles = StyleSheet.create({});
