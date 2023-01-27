/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function forgot() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    let item = {email};
    console.warn(item);

    fetch('https://hiousapp.com/api/user_auth/forgot_password.php', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(result => {
        let statusCode = result.status,
          success = result.ok;
        result.json().then(result => {
          if (!success) {
            console.log(result.message);
            Alert.alert('Warning', result.message);
            return;
          } else {
            console.log(result.message);
            navigation.navigate('Reset');
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.containerTwo}>
          {loading ? (
            <ActivityIndicator
              //visibility of Overlay Loading Spinner
              visible={loading}
              //Text with the Spinner
              textContent={'Loading...'}
              //Text style of the Spinner Text
              textStyle={styles.spinnerTextStyle}
            />
          ) : (
            <>
              <View
                style={{
                  paddingHorizontal: 0,
                  paddingVertical: 20,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="arrow-back" size={30} color={'#828282'} />
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center', paddingTop: 10}}>
                <Image
                  source={require('../assets/2.png')}
                  style={{width: 250, height: 320}}
                />
              </View>
              <View>
                <Text
                  style={{fontSize: 28, color: '#7A86C0', fontWeight: '600'}}>
                  Forgot Password ?
                </Text>
                <Text
                  style={{
                    paddingTop: 20,
                    fontSize: 16,
                    lineHeight: 24,
                    color: '#828282',
                  }}>
                  Don't worry, we will help you get your {'\n'} account back!
                </Text>
                <View>
                  <View
                    style={{
                      backgroundColor: '#F9F9F9',
                      paddingHorizontal: 0,
                      paddingVertical: 0,
                      paddingBottom: 10,
                      borderRadius: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingTop: 10,
                      paddingLeft: 20,
                      marginTop: 30,
                    }}>
                    <Icon name="mail-outline" size={20} color={'#c4c4c4'} />
                    <TextInput
                      style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        fontSize: 16,
                        paddingLeft: 10,
                        color: '#C4C4C4',
                      }}
                      placeholder="Email"
                      placeholderTextColor={'#C4C4C4'}
                      value={email}
                      onChangeText={text => setEmail(text)}
                    />
                  </View>
                  <View>
                    <View>
                      <TouchableOpacity
                        style={styles.btnPrimary}
                        onPress={forgot}>
                        <Text style={styles.reg}>Reset Password</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 30,
    paddingVertical: 0,
    flexGrow: 1,
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#7A86C0',
    borderRadius: 10,
    marginTop: 20,
  },
  reg: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  containerTwo: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 0,
    padding: 8,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
