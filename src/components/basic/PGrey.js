import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {theme} from '../../theme';

const PGrey = ({children, navigation, colorScheme, Align}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      style={{
        fontFamily: 'Montserrat-Regular',
        textAlign: Align ? Align : 'left',
        color: 'grey',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 2,
      }}>
      {children}
    </Text>
  );
};

export default PGrey;

const styles = StyleSheet.create({});
