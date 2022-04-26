import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {GlobalCSS, H2} from '../basic';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {theme} from '../../theme';

const HeaderTopBar = ({onBack}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        GlobalCSS.padding.xmd,
        GlobalCSS.row,
        GlobalCSS.justifyBetween,
        GlobalCSS.alignItemsCenter,
      ]}>
      <TouchableOpacity onPress={onBack} style={styles.Left}>
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color={isDarkMode ? theme.colors.accent : theme.colors.bg}
        />
      </TouchableOpacity>
      <View style={styles.Center}>
        <H2>Hailo</H2>
      </View>
      <View style={[GlobalCSS.alignItemsCenter]}>
        <Fontisto
          name="bell"
          size={22}
          color={isDarkMode ? theme.colors.accent : theme.colors.bg}
        />
        <View
          style={{
            marginTop: 7,
            height: 10,
            width: 10,
            borderRadius: 10,
            backgroundColor: theme.colors.primary,
          }}
        />
      </View>
    </View>
  );
};

export default HeaderTopBar;

const styles = StyleSheet.create({});
