import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {theme} from '../../theme';

const P = ({children, navigation, colorScheme, Align, font, size}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      style={{
        fontFamily: font ? font : 'Montserrat-Regular',
        textAlign: Align ? Align : 'left',
        fontSize: size ? size : 14,
        color: colorScheme
          ? colorScheme
          : isDarkMode
          ? theme.colors.white
          : theme.colors.black,
      }}>
      {children}
    </Text>
  );
};

export default P;

const styles = StyleSheet.create({});
