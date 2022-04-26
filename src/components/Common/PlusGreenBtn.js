import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import React from 'react';
import {Title} from 'react-native-paper';
import {theme} from '../../theme';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const PlusGreenBtn = ({children, onPress, size}) => {
  return (
    <View style={styles.grader}>
      <LinearGradient
        colors={['#20923E', '#29DB57', '#51FF76']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0}}
        useAngle={true}
        angle={0}
        style={[
          styles.linearGradient,
          size
            ? {height: size, width: size, borderRadius: size}
            : {height: 40, width: 40, borderRadius: 40},
        ]}>
        <Pressable style={styles.GreenBtn} onPress={onPress}>
          {children}
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default PlusGreenBtn;

const styles = StyleSheet.create({
  grader: {
    ...theme.customShadow,
  },
  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  GreenBtn: {
    ...theme.customShadow,
  },
});
