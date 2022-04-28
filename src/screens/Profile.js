import {StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import React from 'react';
import {DarkBg, GlobalCSS, GreenBtn, H1, WhiteBtn} from '../components/basic';
import {TextInput} from 'react-native-paper';
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../models';
import AuthContextProvider, {useAuthContext} from '../context/AuthContext';

const Profile = ({navigation}) => {
  const {sub, setDbUser, dbUser} = useAuthContext();

  const [name, setName] = React.useState(dbUser?.name || '');
  // const [address, setAddress] = React.useState(dbUser?.address || '');
  const [email, setEmail] = React.useState(dbUser?.email || '');

  const [lat, setLat] = React.useState(dbUser?.lat || '');
  const [lng, setLng] = React.useState(dbUser?.lng || '');

  const onSave = async () => {
    if (dbUser) {
      await saveUser();
    } else {
      await createUser();
    }
  };
  const saveUser = async () => {
    try {
      const user = await DataStore.save(
        User.copyOf(dbUser, updated => {
          updated.name = name;
          // updated.address = address;
          updated.email = email;
          updated.lat = parseFloat(lat);
          updated.lng = parseFloat(lng);
        }),
        setDbUser(user),
        navigation.navigate('Home'),
      );
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new User({
          name,
          // address,
          email,
          lat: parseFloat(lat),
          lng: parseFloat(lng),
          sub: sub,
        }),
      );
      setDbUser(user);
      navigation.navigate('Home');
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <DarkBg>
      <SafeAreaView style={{flex: 1}}>
        <H1>
          PROFILE
          {dbUser ? (
            <Text> is {dbUser.name}</Text>
          ) : (
            <Text>User Does Not exist</Text>
          )}
        </H1>
        <TextInput
          value="name"
          onChangeText={setName}
          label="Name"
          style={styles.input}
          placeholder="Enter Name"
        />
        <TextInput
          value="email"
          onChangeText={setEmail}
          label="Email"
          textContentType="emailAddress"
          style={styles.input}
          placeholder="Enter Email"
        />

        {/* <TextInput
          value="address"
          onChangeText={setAddress}
          label="address"
          style={styles.input}
          placeholder="Enter address"
        /> */}
        <TextInput
          value="lat"
          onChangeText={setLat}
          label="Lat"
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Lat"
        />
        <TextInput
          value="lng"
          onChangeText={setLng}
          label="Lng"
          keyboardType="numeric"
          style={styles.input}
          placeholder="Enter Lng"
        />
        <View style={[GlobalCSS.padding.ymd]}>
          <WhiteBtn onPress={onSave}>
            {dbUser ? <Text>Update</Text> : <Text>Save</Text>}
          </WhiteBtn>
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
