/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  Pressable,
  ImageBackground,
  Linking,
} from 'react-native';
import {Modal} from 'react-native-paper';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Menu, Divider, Provider} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StoreDetails = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
  const [liked, setLiked] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View>
      <ScrollView style={styles.container}>
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
              <Text style={styles.modalText}>Call using</Text>

              <View style={styles.filter}>
                <Pressable
                  style={styles.filterprop}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Icon name="close" size={30} color={'#fff'} />
                </Pressable>
              </View>
              <TouchableOpacity
                style={styles.call}
                onPress={() => setModalVisibleTwo(!modalVisibleTwo)}>
                <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                  in-app-caller
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.call}
                onPress={() => {
                  Linking.openURL('tel:+2348000000000');
                }}>
                <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                  Phone caller
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleTwo}
          onRequestClose={() => {
            setModalVisibleTwo(!modalVisibleTwo);
          }}>
          <View>
            <Image
              source={require('../assets/caller.png')}
              style={{width: windowWidth, height: windowHeight}}
            />
            <View style={{marginTop: -220}}>
              <TouchableOpacity
                onPress={() => setModalVisibleTwo(!modalVisibleTwo)}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: -70,
                  marginTop: 70,
                  zIndex: 50,
                }}>
                <Image
                  source={require('../assets/cancel.png')}
                  style={{alignItems: 'center', width: 70, height: 70}}
                />
              </TouchableOpacity>
              <ImageBackground
                source={require('../assets/Subtract.png')}
                resizeMode={'cover'}
                style={{
                  paddingVertical: 40,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 30,
                }}>
                <View style={{paddingTop: 40}}>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/mic.png')}
                      style={{alignItems: 'center', width: 30, height: 30}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{paddingTop: 40}}>
                  <Text
                    style={{color: '#FFFFFF', fontSize: 18, fontWeight: '600'}}>
                    Hious Supermarket
                  </Text>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 14,
                      fontWeight: '400',
                      textAlign: 'center',
                    }}>
                    00:53
                  </Text>
                </View>
                <View style={{paddingTop: 40}}>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/volume.png')}
                      style={{alignItems: 'center', width: 30, height: 30}}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </View>
        </Modal>
        <View
          style={{
            paddingHorizontal: 0,
            paddingVertical: 0,
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Supermarket')}>
              <Icon name="arrow-back" size={30} color={'#828282'} />
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <TouchableOpacity>
              <Icon name="notifications-outline" size={30} color={'#828282'} />
            </TouchableOpacity>

            <View>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                onPress={openMenu}
                transparent={true}
                anchor={
                  <TouchableOpacity onPress={openMenu}>
                    <Icon
                      name="ellipsis-vertical-outline"
                      size={30}
                      color={'#828282'}
                    />
                  </TouchableOpacity>
                }
                style={{paddingTop: 40}}>
                <Menu.Item
                  onPress={() => navigation.navigate('ReviewBusiness')}
                  title="Review Business"
                  style={{fontSize: 14, color: '#5C5C5C'}}
                />
                <Menu.Item
                  onPress={() => navigation.navigate('Report')}
                  title="Report"
                  style={{fontSize: 14, color: '#5C5C5C'}}
                />
                <Menu.Item
                  onPress={() => navigation.navigate('Block')}
                  title="Block vendor"
                  style={{fontSize: 14, color: '#5C5C5C'}}
                />
                <Menu.Item
                  onPress={() => navigation.navigate('Share')}
                  title="Share"
                  style={{fontSize: 14, color: '#5C5C5C'}}
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: '#7A86C0',
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{fontSize: 14, color: '#fff', textAlign: 'center'}}>
                    Make Payment
                  </Text>
                </TouchableOpacity>
              </Menu>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: '#7A86C0',
            fontSize: 24,
            fontWeight: '600',
            paddingVertical: 20,
          }}>
          Hious Supermarkets
        </Text>
        <View style={styles.innerDetails}>
          <View>
            <Image
              source={require('../assets/header.png')}
              style={{width: windowWidth - 60, height: 250, borderRadius: 20}}
            />
            <TouchableOpacity
              style={styles.heart}
              onPress={() => setLiked(isLiked => !isLiked)}>
              <Icon
                name={liked ? 'heart' : 'heart-outline'}
                size={30}
                color={liked ? 'white' : 'white'}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title}>Location</Text>
            <Text style={styles.text}>
              14b Mushin, Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </Text>
            <Text style={styles.text}>
              6.1km away from your current location
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={styles.text}>Open</Text>
              <Text style={styles.text}>Closes 9pm</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.text}>4.6</Text>
                <Icon name="star" color={'#828282'} />
                <Icon name="star" color={'#828282'} />
                <Icon name="star" color={'#828282'} />
                <Icon name="star" color={'#828282'} />
                <Icon name="star-half-outline" color={'#828282'} />
              </View>
            </View>
            <View>
              <Text style={styles.title}>About</Text>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A massa
                nullam commodo posuere. Tellus sem nunc mi sapien. Nisl,
                volutpat porttitor urna turpis gravida.
              </Text>
            </View>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.titlePhoto}>Photos</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Photos')}>
                  <Text style={{color: '#5C5C5C'}}>See all</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 20,
                }}>
                <Image
                  source={require('../assets/p1.png')}
                  style={{width: 160, height: 100, borderRadius: 10}}
                />
                <Image
                  source={require('../assets/p2.png')}
                  style={{width: 160, height: 100, borderRadius: 10}}
                />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../assets/p3.png')}
                  style={{width: 160, height: 100, borderRadius: 10}}
                />
                <Image
                  source={require('../assets/p4.png')}
                  style={{width: 160, height: 100, borderRadius: 10}}
                />
              </View>
            </View>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 30,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.titlePhoto}>Reviews/Ratings</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Reviews')}>
                  <Text style={{color: '#5C5C5C'}}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.review}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.text}>4.6</Text>
                  <Icon name="star" color={'#828282'} />
                  <Icon name="star" color={'#828282'} />
                  <Icon name="star" color={'#828282'} />
                  <Icon name="star" color={'#828282'} />
                  <Icon name="star-half-outline" color={'#828282'} />
                </View>
                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                  in in nulla senectus tincidunt nunc, phasellus.
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Image
                    source={require('../assets/m.png')}
                    style={{width: 50, height: 50}}
                  />
                  <View style={styles.reviewEnt}>
                    <Text
                      style={{
                        color: '#5C5C5C',
                        fontSize: 16,
                        fontWeight: '500',
                      }}>
                      Lorem ipsumalo
                    </Text>
                    <Text style={styles.text}>April 04th, 2022</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          marginTop: 70,
          marginBottom: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          paddingVertical: 20,
          paddingHorizontal: 25,
        }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Directions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={require('../assets/call.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Messagedetails')}>
          <Image
            source={require('../assets/chats.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Shipping')}>
          <Image
            source={require('../assets/delivery.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StoreDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    Top: 20,
    bottom: 20,
    right: 0,
    position: 'absolute',
  },
  title: {
    color: '#7A86C0',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
  },
  titlePhoto: {
    color: '#7A86C0',
    fontSize: 18,
    fontWeight: '500',
  },
  text: {
    color: '#5C5C5C',
    fontSize: 14,
    lineHeight: 25,
  },
  review: {
    padding: 20,
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    marginTop: 20,
  },
  reviewEnt: {
    marginLeft: 20,
  },
  btn: {
    backgroundColor: '#7A86C0',
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 450,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#7A86C0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    width: windowWidth,
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
    marginTop: 30,
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  filter: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 20,
  },
  filterprop: {
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    alignItems: 'center',
  },
  call: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginTop: 20,
    width: 300,
    padding: 15,
    borderRadius: 15,
  },
  innerDetails: {
    paddingBottom: 150,
  },
});
