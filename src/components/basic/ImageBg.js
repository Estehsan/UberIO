import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {GlobalCSS} from '.';

const ImageBg = ({children, B}) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      }}
      resizeMode="cover"
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={[GlobalCSS.flex]}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default ImageBg;

const styles = StyleSheet.create({});
