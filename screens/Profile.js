/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
  Pressable,
  Modal,
  Alert,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const Profile = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const [modalVisibleEleven, setModalVisibleEleven] = useState(false);
  const [checked, setChecked] = React.useState('first');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  const showModal = () => {
    setModalVisibleEleven(true);
  };

  async function getData() {
    const jwt = await AsyncStorage.getItem('AccessToken');
    let item = {jwt};
    console.warn(item);

    return fetch('https://hiousapp.com/api/user_auth/fetch_user_profile.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getData();
  }, []);

  const [phone_number, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState('');

  async function updateName() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const jwt = await AsyncStorage.getItem('AccessToken');
    let item = {name, email, address, phone_number, gender, profile, jwt};
    console.warn(item);

    fetch('https://hiousapp.com/api/user_auth/update_user.php', {
      method: 'PUT',
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
            AsyncStorage.setItem('AccessToken', result.data.jwt);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleEleven}
        onRequestClose={() => {
          setModalVisibleEleven(!modalVisibleEleven);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                position: 'absolute',
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleEleven(!modalVisibleEleven)}>
              <Icon name="close" size={30} color={'#fff'} />
            </Pressable>
            <Text style={styles.modalText}>Name</Text>
            <TextInput
              style={{
                backgroundColor: '#727FBE',
                padding: 10,
                borderRadius: 6,
                color: '#fff',
                fontSize: 16,
                width: 260,
              }}
              placeholder={data.name}
              placeholderTextColor={'#f7f7f7'}
              defaultValue={data.name}
              onChangeText={text => setName(text)}
            />

            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                position: 'absolute',
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleEleven(!modalVisibleEleven)}>
              <Icon name="close" size={30} color={'#fff'} />
            </Pressable>
            <Text style={styles.modalText}>Email address</Text>
            <TextInput
              style={{
                backgroundColor: '#727FBE',
                padding: 10,
                borderRadius: 6,
                color: '#fff',
                fontSize: 16,
                width: 260,
              }}
              placeholder={data.email}
              placeholderTextColor={'#f7f7f7'}
              defaultValue={data.email}
              onChangeText={text => setEmail(text)}
            />
            <Text style={styles.modalText}>Phone number</Text>
            <TextInput
              style={{
                backgroundColor: '#727FBE',
                padding: 10,
                borderRadius: 6,
                color: '#fff',
                fontSize: 16,
                width: 260,
              }}
              placeholder={data.phone_number}
              placeholderTextColor={'#fff'}
              value={phone_number}
              onChangeText={text => setPhoneNumber(text)}
            />
            <Text style={styles.modalText}>Address</Text>
            <TextInput
              style={{
                backgroundColor: '#727FBE',
                padding: 10,
                borderRadius: 6,
                color: '#fff',
                fontSize: 16,
                width: 260,
              }}
              placeholder={data.address}
              placeholderTextColor={'#fff'}
              value={address}
              multiline={true}
              onChangeText={text => setAddress(text)}
            />
            <Text style={styles.modalText}>Gender</Text>
            <TextInput
              style={{
                backgroundColor: '#727FBE',
                padding: 10,
                borderRadius: 6,
                color: '#fff',
                fontSize: 16,
                width: 260,
              }}
              placeholder={data.gender}
              placeholderTextColor={'#f7f7f7'}
              value={gender}
              onChangeText={text => setGender(text)}
            />
            <Text style={styles.modalText}>Profile</Text>
            <TextInput
              style={{
                backgroundColor: '#727FBE',
                padding: 10,
                borderRadius: 6,
                color: '#fff',
                fontSize: 16,
                width: 260,
              }}
              placeholder={data.profile}
              placeholderTextColor={'#f7f7f7'}
              value={profile}
              onChangeText={text => setProfile(text)}
            />
            <View style={styles.close}>
              <TouchableOpacity
                onPress={() => setModalVisibleEleven(!modalVisibleEleven)}>
                <Text
                  style={{color: '#B4BDE4', fontSize: 16, fontWeight: '400'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisibleEleven(!modalVisibleEleven);
                  Alert.alert('Success', 'Profile updated successfully');
                  navigation.navigate('Profile');
                  updateName();
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '500',
                    marginLeft: 20,
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTwelve}
        onRequestClose={() => {
          setModalVisibleTwelve(!modalVisibleTwelve);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                position: 'absolute',
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleTwelve(!modalVisibleTwelve)}>
              <Icon name="close" size={30} color={'#fff'} />
            </Pressable>
            <Text style={styles.modalText}>Gender</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>
                Male
              </Text>
              <RadioButton
                value="Male"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
                color="#fff"
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>
                Female
              </Text>
              <RadioButton
                value="Female"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
                color="#fff"
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleThirteen}
        onRequestClose={() => {
          setModalVisibleThirteen(!modalVisibleThirteen);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                position: 'absolute',
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleThirteen(!modalVisibleThirteen)}>
              <Icon name="close" size={30} color={'#fff'} />
            </Pressable>
            <Text style={styles.modalText}>Date of Birth</Text>
            <TextInput
              style={{
                backgroundColor: '#727FBE',
                padding: 10,
                borderRadius: 6,
                color: '#fff',
                fontSize: 16,
                width: 260,
              }}
              placeholder="Apr. 11th, 1991"
              placeholderTextColor={'#fff'}
            />

            <View style={styles.close}>
              <TouchableOpacity
                onPress={() => setModalVisibleThirteen(!modalVisibleThirteen)}>
                <Text
                  style={{color: '#B4BDE4', fontSize: 16, fontWeight: '400'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '500',
                    marginLeft: 20,
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleFourteen}
        onRequestClose={() => {
          setModalVisibleFourteen(!modalVisibleFourteen);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                position: 'absolute',
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleFourteen(!modalVisibleFourteen)}>
              <Icon name="close" size={30} color={'#fff'} />
            </Pressable>
            <Text style={styles.modalText}>Address</Text>
            <TextInput
              style={{
                backgroundColor: '#727FBE',
                padding: 10,
                borderRadius: 6,
                color: '#fff',
                fontSize: 16,
                width: 260,
              }}
              multiline={true}
              numberOfLines={6}
              placeholder="Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Nulla eget dui vitae amet. Dui, ante varius nulla natoque facilisis morbi."
              placeholderTextColor={'#fff'}
            />

            <View style={styles.close}>
              <TouchableOpacity
                onPress={() => setModalVisibleFourteen(!modalVisibleFourteen)}>
                <Text
                  style={{color: '#B4BDE4', fontSize: 16, fontWeight: '400'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '500',
                    marginLeft: 20,
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            size="default"
            color="#3E90FC"
          />
        }>
        <View
          style={{
            paddingHorizontal: 0,
            paddingVertical: 20,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Icon name="arrow-back" size={30} color={'#828282'} />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <View
              style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row',
                paddingTop: 30,
              }}>
              <Image
                source={require('../assets/user.png')}
                style={{width: 100, height: 100, borderRadius: 20}}
              />
            </View>
            <View style={{paddingTop: 30}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 0,
                  borderBottomColor: '#97979733',
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                }}>
                <Text
                  style={{fontSize: 16, color: '#5C5C5C', fontWeight: '500'}}>
                  Name
                </Text>
                {loading ? (
                  <Text
                    style={{
                      fontSize: 16,
                      paddingLeft: 10,
                      fontWeight: '400',
                      color: '#5C5C5C',
                    }}>
                    Loading
                  </Text>
                ) : (
                  <Text style={{color: '#B9BCBF', fontSize: 16}}>
                    {data.name}
                  </Text>
                )}
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 0,
                  borderBottomColor: '#97979733',
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                }}>
                <Text
                  style={{fontSize: 16, color: '#5C5C5C', fontWeight: '500'}}>
                  Email
                </Text>
                {loading ? (
                  <Text
                    style={{
                      fontSize: 16,
                      paddingLeft: 10,
                      fontWeight: '400',
                      color: '#5C5C5C',
                    }}>
                    Loading
                  </Text>
                ) : (
                  <Text style={{color: '#B9BCBF', fontSize: 16}}>
                    {data.email}
                  </Text>
                )}
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 0,
                  borderBottomColor: '#97979733',
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                }}>
                <Text
                  style={{fontSize: 16, color: '#5C5C5C', fontWeight: '500'}}>
                  Gender
                </Text>
                {loading ? (
                  <Text
                    style={{
                      fontSize: 16,
                      paddingLeft: 10,
                      fontWeight: '400',
                      color: '#5C5C5C',
                    }}>
                    Loading
                  </Text>
                ) : (
                  <Text style={{color: '#B9BCBF', fontSize: 16}}>
                    {data.gender}
                  </Text>
                )}
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 0,
                  borderBottomColor: '#97979733',
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                }}>
                <Text
                  style={{fontSize: 16, color: '#5C5C5C', fontWeight: '500'}}>
                  Phone number
                </Text>
                {loading ? (
                  <Text
                    style={{
                      fontSize: 16,
                      paddingLeft: 10,
                      fontWeight: '400',
                      color: '#5C5C5C',
                    }}>
                    Loading
                  </Text>
                ) : (
                  <Text style={{color: '#B9BCBF', fontSize: 16}}>
                    {data.phone_number}
                  </Text>
                )}
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingHorizontal: 0,
                  paddingVertical: 20,
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{fontSize: 16, color: '#5C5C5C', fontWeight: '500'}}>
                  Address
                </Text>
                {loading ? (
                  <Text
                    style={{
                      fontSize: 16,
                      paddingLeft: 10,
                      fontWeight: '400',
                      color: '#5C5C5C',
                    }}>
                    Loading
                  </Text>
                ) : (
                  <Text style={{color: '#B9BCBF', fontSize: 16}}>
                    {data.address}
                  </Text>
                )}
              </View>
            </View>

            <TouchableOpacity style={styles.btnPrimary} onPress={showModal}>
              <Text style={styles.reg}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 30,
    paddingVertical: 0,
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#7A86C0',
    borderRadius: 10,
    marginTop: 70,
  },
  reg: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
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
    padding: 35,
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
    textAlign: 'left',
    marginTop: 15,
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  close: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
    alignItems: 'flex-end',
  },
});
