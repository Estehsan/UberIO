import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {theme} from '../../theme';

const DarkBg = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? theme.colors.bg : theme.colors.lightbg,
      }}>
      {children}
    </View>
  );
};

export default DarkBg;

const styles = StyleSheet.create({});
