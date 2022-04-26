import {StyleSheet, useColorScheme, Text} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';
import {theme} from './../../theme';

const H1 = ({children, color, size, lineHeight}) => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <>
      <Text
        style={{
          fontSize: size ? size : 20,
          color: color
            ? color
            : isDarkMode
            ? theme.colors.bg
            : theme.colors.accent,
          fontWeight: '600',
          letterSpacing: 1,
          lineHeight: lineHeight ? lineHeight : 24,
        }}>
        {children}
      </Text>
    </>
  );
};

export default H1;

const styles = StyleSheet.create({});
