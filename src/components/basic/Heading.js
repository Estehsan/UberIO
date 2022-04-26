import {StyleSheet, useColorScheme, Text} from 'react-native';
import React from 'react';
import {Headline} from 'react-native-paper';
import {theme} from '../../theme';

const Heading = ({children}) => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <>
      <Headline
        style={{
          fontSize: 36,
          fontWeight: '400',
          lineHeight: 43,
          letterSpacing: 1,
          color: isDarkMode ? theme.colors.bg : theme.colors.accent,
        }}>
        {children}
      </Headline>
    </>
  );
};

export default Heading;

const styles = StyleSheet.create({});
