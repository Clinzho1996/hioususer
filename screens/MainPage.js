/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const MainPage = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          size="default"
          color="#3E90FC"
        />
      }>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Filters</Text>
            <View>
              <Text style={{color: '#FFFFFF', textAlign: 'left'}}>
                Distance
              </Text>
            </View>
            <View style={{marginTop: 50}}>
              <Text style={{color: '#FFFFFF', textAlign: 'left'}}>Rating</Text>
            </View>
            <View style={styles.filter}>
              <TouchableOpacity style={styles.filterprop} onPress={getData}>
                <Text style={{color: '#5C5C5C', fontSize: 16}}>
                  Apply Filter
                </Text>
              </TouchableOpacity>
              <Pressable
                style={styles.filterprop}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{color: '#5C5C5C', fontSize: 18}}>x</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.user}>
        <TouchableOpacity
          style={styles.userdetails}
          onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../assets/Usericon.png')}
            style={{width: 50, height: 50, borderRadius: 25}}
          />
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
            <Text
              style={{
                fontSize: 16,
                paddingLeft: 10,
                fontWeight: '400',
                color: '#5C5C5C',
              }}>
              Hello, {data.name}
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Image
            source={require('../assets/notify.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingVertical: 20}}>
        <Text
          style={{
            color: '#7A86C0',
            fontSize: 24,
            lineHeight: 36,
            fontWeight: '600',
          }}>
          What are {'\n'}you looking for?
        </Text>
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="Search here..."
          placeholderTextColor={'#C4C4C4'}
          style={{fontSize: 16}}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={require('../assets/Filter.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 20, paddingBottom: 50}}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate('Supermarket')}>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Super.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Supermarket</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Food.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Food/Eatery</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Super.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Petrol station</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Hotel.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Hotel</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/ATM.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Banks (ATM)</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/mechanic.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Mechanic</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Carwash.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Car wash</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Drycleaning.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Dry cleaning</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Fashion.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Fashion</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Carpark.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Car park</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Electronics.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Electronics</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Solderingiron.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Gadgets</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Gym.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Gym</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Healthcentres.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Health centres</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/School.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Schools</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Daycare.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Daycare</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Carrental.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Car rental</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Policestation.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={styles.text}>Police station</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: windowWidth,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userdetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    color: '#5c5c5c',
    marginTop: 5,
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
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  filter: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterprop: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    alignItems: 'center',
  },
});
