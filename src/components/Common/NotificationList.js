import {StyleSheet, Text, View, Image, useColorScheme} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';
import {GlobalCSS, H1, H2, H3, P, PGrey} from '../basic';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Divider} from '../../components/Home/Divider';
import Feather from 'react-native-vector-icons/Feather';
import PlusGreenBtn from './PlusGreenBtn';
const NotificationList = ({item}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {title, image, time, location, like, comment, share, profileImage} =
    item;
  return (
    <View style={[GlobalCSS.padding.ymd]}>
      <View style={[GlobalCSS.row, GlobalCSS.flex, {...theme.customShadow2}]}>
        <View style={[GlobalCSS.alignItemsCenter, GlobalCSS.padding.xmd]}>
          <View
            style={[
              GlobalCSS.fixedContainer.r50,
              GlobalCSS.justifyCenter,
              GlobalCSS.alignItemsCenter,
              ,
              {
                backgroundColor: isDarkMode
                  ? theme.colors.header
                  : theme.colors.accent,
                ...theme.customShadow,
              },
            ]}>
            <Feather
              name="message-square"
              size={30}
              color={theme.colors.primary}
            />
          </View>
          <View style={styles.line} />
        </View>

        {/* Right Content */}
        <View style={[GlobalCSS.flex]}>
          <H2 font="Montserrat-SemiBold">{title}</H2>
          <H3 color={theme.colors.grey}>{time}</H3>

          <View
            style={[
              styles.container,
              GlobalCSS.row,
              GlobalCSS.padding.xsm,
              {
                backgroundColor: isDarkMode
                  ? theme.colors.header
                  : theme.colors.accent,
              },
            ]}>
            <PlusGreenBtn>
              <FontAwesome name="heart" size={20} color={theme.colors.white} />
            </PlusGreenBtn>
            <View style={[GlobalCSS.padding.xmd]}>
              <H1>ACHIEVE 85kg</H1>
              <H3 color={theme.colors.grey}>ACHIEVE 85kg</H3>
            </View>
          </View>
          <View style={[GlobalCSS.padding.ymd]}></View>
        </View>
      </View>
    </View>
  );
};

export default NotificationList;

const styles = StyleSheet.create({
  container: {
    width: '98%',
    paddingVertical: 30,
    borderRadius: 15,
  },
  line: {
    height: '80%',
    width: 3,
    backgroundColor: theme.colors.tabColorLight,
  },
});
