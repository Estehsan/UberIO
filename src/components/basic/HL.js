import {StyleSheet, useColorScheme, Text} from 'react-native';
import React from 'react';
import {Headline} from 'react-native-paper';
import {theme} from '../../theme';

const HL = ({children, size}) => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <>
      <Headline
        style={{
          color: isDarkMode ? theme.colors.bg : theme.colors.accent,
          fontSize: size ? size : 23,
          lineHeight: size ? size : 23,
          letterSpacing: 2,
        }}>
        {children}
      </Headline>
    </>
  );
};

export default HL;

const styles = StyleSheet.create({});
