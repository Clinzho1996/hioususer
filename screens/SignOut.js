/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {auth, db} from './firebase';
import {signOut} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignOut = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/map.png')}
      style={{width: windowWidth, height: windowHeight}}
      imageStyle={{
        opacity: 0.2,
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Are you sure you {'\n'}want to sign out?
          </Text>

          <View style={styles.close}>
            <TouchableOpacity
              style={{
                backgroundColor: '#727FBE',
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate('Main')}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: '400'}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: 35,
                paddingVertical: 15,
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: '#5C5C5C',
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                Sign out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignOut;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#7A86C0',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 320,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  close: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
