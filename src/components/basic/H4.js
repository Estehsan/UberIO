import {StyleSheet, useColorScheme, Text} from 'react-native';
import React from 'react';
import {theme} from '../../theme';

const H3 = ({children, font, color}) => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <>
      <Text
        style={{
          fontSize: 10,
          color: color
            ? color
            : isDarkMode
            ? theme.colors.bg
            : theme.colors.accent,
          fontFamily: font ? font : 'Montserrat-SemiBold',
          fontWeight: '600',
          letterSpacing: 2,
          lineHeight: 24,
        }}>
        {children}
      </Text>
    </>
  );
};

export default H3;

const styles = StyleSheet.create({});
