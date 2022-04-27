import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {DarkBg, GlobalCSS, GreenBtn, H1, WhiteBtn} from '../components/basic';
import {TextInput} from 'react-native-paper';
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../models';
import AuthContextProvider from '../context/AuthContext';

const Profile = () => {
  const {sub} = AuthContextProvider();

  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [lat, setLat] = React.useState('');
  const [lng, setLng] = React.useState('');

  const onSave = () => {
    try {
      DataStore.save(
        new User({
          name,
          address,
          lat: parseFloat(lat),
          lng: parseFloat(lng),
          sub,
        }),
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DarkBg>
      <SafeAreaView style={{flex: 1}}>
        <H1>PROFILE</H1>
        <TextInput
          value="name"
          onChangeText={setName}
          label="Name"
          style={styles.input}
          placeholder="Enter Name"
        />
        <TextInput
          value="address"
          onChangeText={setAddress}
          label="address"
          style={styles.input}
          placeholder="Enter address"
        />
        <TextInput
          value="lat"
          onChangeText={setLat}
          label="Lat"
          style={styles.input}
          placeholder="Enter Lat"
        />
        <TextInput
          value="lng"
          onChangeText={setLng}
          label="Lng"
          style={styles.input}
          placeholder="Enter Lng"
        />
        <View style={[GlobalCSS.padding.ymd]}>
          <WhiteBtn onPress={onSave}>asdsa</WhiteBtn>
        </View>
        <GreenBtn
          onPress={() => {
            Auth.signOut();
          }}>
          <H1>LOGOUT</H1>
        </GreenBtn>
      </SafeAreaView>
    </DarkBg>
  );
};

export default Profile;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});
