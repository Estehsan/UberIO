import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Headline, Subheading, Title} from 'react-native-paper';
import {theme} from '../../theme';
const GreenBtn = ({children, title, onPress, LeftIcon, navigation}) => {
  return (
    <LinearGradient
      colors={['#20923E', '#29DB57', '#51FF76']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0}}
      useAngle={true}
      angle={180}
      style={styles.linearGradient}>
      {LeftIcon === 'true' ? (
        <TouchableOpacity style={styles.GreenBtn} onPress={onPress}>
          {children}
          <Title style={{color: 'white'}}>{title}</Title>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.GreenBtn} onPress={onPress}>
          <Title style={{color: 'white'}}>{title}</Title>
          {children}
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

export default GreenBtn;

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: 45,
    borderRadius: 50,

    ...theme.customShadow,
  },

  GreenBtn: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
