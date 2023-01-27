/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Favorite = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="arrow-back" size={30} color={'#828282'} />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 0,
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
         <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Image
            source={require('../assets/notify.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{paddingLeft: 10}}>
            <Image
              source={require('../assets/user.png')}
              style={{width: 30, height: 30, borderRadius: 50}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingTop: 0}}>
        <Text style={{fontSize: 24, color: '#7A86C0', fontWeight: '600'}}>
          Liked Business
        </Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.storeCont}
          onPress={() => navigation.navigate('StoreDetails')}>
          <View style={styles.store}>
            <Text style={styles.title}>Hious Supermarket</Text>
            <Image
              source={require('../assets/super1.png')}
              style={{width: 100, height: 60, borderRadius: 6}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.cont}>14b Mushin</Text>
            <Text style={styles.cont}>6.1km</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>4.6</Text>
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star-half-outline" color={'#828282'} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.cont}>Open</Text>
            <Text style={styles.cont}>Closes 9pm</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>Remove</Text>
              <Icon name="heart-dislike-outline" size={20} color={'#828282'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.storeCont}>
          <View style={styles.store}>
            <Text style={styles.title}>Traveller's {'\n'} Choice Mart</Text>
            <Image
              source={require('../assets/super2.png')}
              style={{width: 100, height: 60, borderRadius: 6}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.cont}>14b Mushin</Text>
            <Text style={styles.cont}>6.1km</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>4.6</Text>
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star-half-outline" color={'#828282'} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.cont}>Open</Text>
            <Text style={styles.cont}>Closes 9pm</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>Remove</Text>
              <Icon name="heart-dislike-outline" size={20} color={'#828282'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.storeCont}>
          <View style={styles.store}>
            <Text style={styles.title}>Hannah's {'\n'} Place</Text>
            <Image
              source={require('../assets/super3.png')}
              style={{width: 100, height: 60, borderRadius: 6}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.cont}>14b Mushin</Text>
            <Text style={styles.cont}>6.1km</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>4.6</Text>
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star-half-outline" color={'#828282'} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.cont}>Open</Text>
            <Text style={styles.cont}>Closes 9pm</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>Remove</Text>
              <Icon name="heart-dislike-outline" size={20} color={'#828282'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.storeCont}>
          <View style={styles.store}>
            <Text style={styles.title}>Hious 'D' Supermarket</Text>
            <Image
              source={require('../assets/super4.png')}
              style={{width: 100, height: 60, borderRadius: 6}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.cont}>14b Mushin</Text>
            <Text style={styles.cont}>6.1km</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>4.6</Text>
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star-half-outline" color={'#828282'} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.cont}>Open</Text>
            <Text style={styles.cont}>Closes 9pm</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>Remove</Text>
              <Icon name="heart-dislike-outline" size={20} color={'#828282'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.storeCont}>
          <View style={styles.store}>
            <Text style={styles.title}>Smiling {'\n'} Dove Mart</Text>
            <Image
              source={require('../assets/super5.png')}
              style={{width: 100, height: 60, borderRadius: 6}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.cont}>14b Mushin</Text>
            <Text style={styles.cont}>6.1km</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>4.6</Text>
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star-half-outline" color={'#828282'} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.cont}>Open</Text>
            <Text style={styles.cont}>Closes 9pm</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>Remove</Text>
              <Icon name="heart-dislike-outline" size={20} color={'#828282'} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Favorite;

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
    marginTop: 270,
  },
  reg: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  store: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#7A86C0',
    fontSize: 18,
    fontWeight: '500',
    width: 150,
    lineHeight: 28,
  },
  storeCont: {
    padding: 30,
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    marginTop: 20,
  },
  cont: {
    color: '#5C5C5C',
  },
  body: {
    paddingBottom: 50,
  },
});
