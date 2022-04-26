import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalCSS, Heading} from '../basic';
import PlusGreenBtn from './PlusGreenBtn';
import Entypo from 'react-native-vector-icons/Entypo';

const CommonTitleHeader = ({title, onPress}) => {
  return (
    <View
      style={[
        GlobalCSS.padding.ylg,
        GlobalCSS.row,
        GlobalCSS.justifyBetween,
        GlobalCSS.padding.xmd,
      ]}>
      <Heading>{title}</Heading>
      {onPress ? (
        <PlusGreenBtn onPress={onPress}>
          <Entypo name="plus" size={28} color="white" />
        </PlusGreenBtn>
      ) : null}
    </View>
  );
};

export default CommonTitleHeader;

const styles = StyleSheet.create({});
