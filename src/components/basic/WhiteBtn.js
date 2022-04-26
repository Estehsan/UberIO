import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Headline, Subheading, Title} from 'react-native-paper';
import {theme} from '../../theme';

const WhiteBtn = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.WhiteBtn} onPress={onPress}>
      <Title style={{color: 'black'}}>{children}</Title>
    </TouchableOpacity>
  );
};

export default WhiteBtn;

const styles = StyleSheet.create({
  WhiteBtn: {
    width: '100%',
    borderRadius: 50,

    height: 45,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.customShadow,
  },
});
