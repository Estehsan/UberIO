import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  Pressable,
} from 'react-native';

import React from 'react';
import {Title} from 'react-native-paper';
import {theme} from '../../theme';

const WhiteRoundBtn = ({children, onPress, size, staticColor}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.grader,
        size
          ? {height: size, width: size, borderRadius: size}
          : {height: 40, width: 40, borderRadius: 40},
        {
          backgroundColor: staticColor
            ? staticColor
            : isDarkMode
            ? theme.colors.header
            : theme.colors.accent,
        },
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export default WhiteRoundBtn;

const styles = StyleSheet.create({
  grader: {
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.customShadow,
  },
  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
