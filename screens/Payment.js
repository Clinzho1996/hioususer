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
  Pressable,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import {Checkbox} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Payment = ({navigation}) => {
  const [modalVisibleFifteen, setModalVisibleFifteen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
  const [modalVisibleThree, setModalVisibleThree] = useState(false);
  const [modalVisibleSixteen, setModalVisibleSixteen] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const showModal = () => {
    setModalVisibleFifteen(true);
    setTimeout(() => {
      setModalVisibleFifteen(false);
    }, 10000);
  };
  const showModalTwo = () => {
    setModalVisibleSixteen(true);
    setTimeout(() => {
      setModalVisibleSixteen(false);
    }, 10000);
  };
  const showModalThree = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 10000);
  };
  const showModalFour = () => {
    setModalVisibleTwo(true);
    setTimeout(() => {
      setModalVisibleTwo(false);
    }, 10000);
  };
  const showModalFive = () => {
    setModalVisibleThree(true);
    setTimeout(() => {
      setModalVisibleThree(false);
    }, 10000);
  };

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
  return (
    <ScrollView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredViewTwo}>
          <View style={styles.modalViewTwo}>
            <Text style={styles.modalTextTwo}>Top-up wallet</Text>

            <View style={styles.filterTwo}>
              <Pressable
                style={styles.filterpropTwo}
                onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close" size={30} color={'#fff'} />
              </Pressable>
            </View>
            <TouchableOpacity
              style={styles.call}
              onPress={() => showModalFour()}>
              <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                With Bank Transfer
              </Text>
              <Icon name="chevron-forward" size={20} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.call}
              onPress={() => showModalTwo()}>
              <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                With Debit Card
              </Text>
              <Icon name="chevron-forward" size={20} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleThree}
        onRequestClose={() => {
          setModalVisibleThree(!modalVisibleThree);
        }}>
        <View style={styles.centeredViewTwo}>
          <View style={styles.modalViewTwo}>
            <Text style={styles.modalTextTwo}>Almost there</Text>
            <View style={styles.filterTwo}>
              <Pressable
                style={styles.filterpropTwo}
                onPress={() => setModalVisibleThree(!modalVisibleThree)}>
                <Icon name="close" size={30} color={'#fff'} />
              </Pressable>
            </View>
            <View style={{marginVertical: 20}}>
              <View>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 18,
                    fontWeight: '400',
                    lineHeight: 27,
                  }}>
                  Enter OTP sent yo your phone
                </Text>
                <TextInput
                  style={{
                    backgroundColor: '#727FBE',
                    paddingRight: 100,
                    paddingLeft: 20,
                    paddingVertical: 15,
                    borderRadius: 10,
                    marginTop: 10,
                    color: '#B4BDE4',
                  }}
                  placeholder="123"
                  placeholderTextColor={'#B4BDE4'}
                  keyboardType={'numeric'}
                />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  paddingHorizontal: 50,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 20,
                }}
                onPress={() => showModalFive()}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#7A86C0',
                    textAlign: 'center',
                  }}>
                  Save card
                </Text>
              </TouchableOpacity>
            </View>
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
        <View style={styles.centeredViewTwo}>
          <View style={styles.modalViewTwo}>
            <Text style={styles.modalTextTwo}>Bank details</Text>

            <View style={styles.filterTwo}>
              <Pressable
                style={styles.filterpropTwo}
                onPress={() => setModalVisibleTwo(!modalVisibleTwo)}>
                <Icon name="close" size={30} color={'#fff'} />
              </Pressable>
            </View>
            <View>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'left',
                  fontSize: 16,
                  fontWeight: '300',
                }}>
                Bank name:{' '}
                <Text
                  style={{
                    fontWeight: '600',
                  }}>
                  dolor sit amet, consecte
                </Text>
              </Text>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'left',
                  fontSize: 16,
                  fontWeight: '300',
                }}>
                Account name:{' '}
                <Text
                  style={{
                    fontWeight: '600',
                  }}>
                  Arcu potenti
                </Text>
              </Text>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'left',
                  fontSize: 16,
                  fontWeight: '300',
                }}>
                Account number:{' '}
                <Text
                  style={{
                    fontWeight: '600',
                  }}>
                  0012345678
                </Text>
              </Text>
            </View>
            <View style={styles.callTwo}>
              <TouchableOpacity onPress={() => showModalFour()}>
                <Text style={{color: '#FFFFFF', textAlign: 'left'}}>
                  Copy Account number
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/copies.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: '#FFFFFF',
                textAlign: 'left',
                fontSize: 12,
                fontWeight: '300',
                paddingVertical: 30,
              }}>
              Please note, it might take about 15mins for the top-up to reflect
              in your wallet.
            </Text>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleFifteen}
        onRequestClose={() => {
          setModalVisibleFifteen(!modalVisibleFifteen);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.filter}>
              <Pressable
                style={styles.filterprop}
                onPress={() => setModalVisibleFifteen(!modalVisibleFifteen)}>
                <Icon name="close" color={'#fff'} size={30} />
              </Pressable>
            </View>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 24,
                fontWeight: '600',
                lineHeight: 27,
                marginTop: 20,
              }}>
              Add new card
            </Text>
            <View style={{marginVertical: 20}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: '500',
                  lineHeight: 27,
                  marginTop: 20,
                }}>
                Card number
              </Text>
              <TextInput
                style={{
                  backgroundColor: '#727FBE',
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 10,
                  color: '#B4BDE4',
                }}
                placeholder="Enter 16-digits card number"
                placeholderTextColor={'#B4BDE4'}
                keyboardType={'numeric'}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 18,
                      fontWeight: '500',
                      lineHeight: 27,
                      marginTop: 40,
                    }}>
                    Expiry date
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: '#727FBE',
                      paddingRight: 100,
                      paddingLeft: 20,
                      paddingVertical: 15,
                      borderRadius: 10,
                      marginTop: 10,
                      color: '#B4BDE4',
                    }}
                    placeholder="01/23"
                    placeholderTextColor={'#B4BDE4'}
                    keyboardType={'numeric'}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 18,
                      fontWeight: '500',
                      lineHeight: 27,
                      marginTop: 40,
                    }}>
                    CVV
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: '#727FBE',
                      paddingRight: 100,
                      paddingLeft: 20,
                      paddingVertical: 15,
                      borderRadius: 10,
                      marginTop: 10,
                      color: '#B4BDE4',
                    }}
                    placeholder="123"
                    placeholderTextColor={'#B4BDE4'}
                    keyboardType={'numeric'}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  paddingHorizontal: 50,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 50,
                }}
                onPress={() => showModalFive()}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#7A86C0',
                    textAlign: 'center',
                  }}>
                  Confirm details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSixteen}
        onRequestClose={() => {
          setModalVisibleSixteen(!modalVisibleSixteen);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.filter}>
              <Pressable
                style={styles.filterprop}
                onPress={() => setModalVisibleSixteen(!modalVisibleSixteen)}>
                <Icon name="close" color={'#fff'} size={30} />
              </Pressable>
            </View>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 24,
                fontWeight: '600',
                lineHeight: 27,
                marginTop: 20,
              }}>
              Top-up with card
            </Text>
            <View style={{marginVertical: 20}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 18,
                    fontWeight: '500',
                    lineHeight: 27,
                  }}>
                  Bank Cards
                </Text>
                <TouchableOpacity onPress={() => showModal()}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 27,
                    }}>
                    Add a new card
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    backgroundColor: '#F9F9F9',
                    padding: 15,
                    borderRadius: 15,
                    width: 155,
                  }}>
                  <Text style={{color: '#5C5C5C'}}>**** 7545</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: 20,
                    }}>
                    <Text style={{color: '#5C5C5C'}}>02/22</Text>
                    <Image
                      source={require('../assets/master.png')}
                      style={{width: 30, height: 20}}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#CCCFE2',
                    padding: 15,
                    borderRadius: 15,
                    width: 155,
                  }}>
                  <Text style={{color: '#5C5C5C'}}>**** 7545</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: 20,
                    }}>
                    <Text style={{color: '#5C5C5C'}}>02/22</Text>
                    <Image
                      source={require('../assets/master.png')}
                      style={{width: 30, height: 20}}
                    />
                  </View>
                </View>
              </View>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: '500',
                  lineHeight: 27,
                  marginTop: 20,
                }}>
                Topup Amount
              </Text>
              <TextInput
                style={{
                  backgroundColor: '#727FBE',
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 10,
                  color: '#B4BDE4',
                }}
                placeholder="Enter amount"
                placeholderTextColor={'#B4BDE4'}
                keyboardType={'numeric'}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color="#fff"
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 12,
                    fontWeight: '400',
                    marginLeft: 10,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur {'\n'} adipiscing
                  elit. Tortor consectetur.
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 30,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#7A86C0',
                    textAlign: 'center',
                  }}>
                  Confirm top-up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../assets/user.png')}
            style={{width: 40, height: 40, borderRadius: 50}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Image
            source={require('../assets/notify.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingTop: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, color: '#7A86C0', fontWeight: '600'}}>
          Wallet
        </Text>
        <View
          style={{
            paddingTop: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/points.png')}
            style={{width: 25, height: 25}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#B9BCBF',
              fontWeight: '400',
              paddingLeft: 5,
            }}>
            89 points
          </Text>
        </View>
      </View>
      <View style={styles.wallet}>
        <View style={{alignItems: 'center', paddingVertical: 30}}>
          <Text style={{color: '#FFFFFF', fontSize: 16, lineHeight: 24}}>
            Total balance
          </Text>
          {loading ? (
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 20,
                lineHeight: 45,
                fontWeight: '600',
              }}>
              Fetching Wallet balance
            </Text>
          ) : (
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 30,
                lineHeight: 45,
                fontWeight: '600',
              }}>
              {data.wallet}
            </Text>
          )}
        </View>
        <View>
          <TouchableOpacity
            style={styles.topup}
            onPress={() => showModalThree()}>
            <Text style={styles.topupText}>Topup</Text>
            <Icon name="add-outline" color={'#fff'} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{paddingVertical: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#7A86C0', fontSize: 18, fontWeight: '600'}}>
            Cards
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#B9BCBF'}}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              backgroundColor: '#F9F9F9',
              padding: 15,
              borderRadius: 15,
              width: 145,
            }}>
            <Text style={{color: '#5C5C5C'}}>**** 7545</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text style={{color: '#5C5C5C'}}>02/22</Text>
              <Image
                source={require('../assets/master.png')}
                style={{width: 30, height: 20}}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#CCCFE2',
              padding: 15,
              borderRadius: 15,
              width: 145,
            }}>
            <Text style={{color: '#5C5C5C'}}>**** 7545</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text style={{color: '#5C5C5C'}}>02/22</Text>
              <Image
                source={require('../assets/master.png')}
                style={{width: 30, height: 20}}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.btnPrimary}>
          <Text style={styles.reg}>Manage cards</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          paddingVertical: 20,
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Transactions')}>
        <Image
          source={require('../assets/Vector.png')}
          style={{width: 40, height: 20}}
        />
      </TouchableOpacity>
      <View style={{paddingTop: 0}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#7A86C0', fontSize: 18, fontWeight: '600'}}>
            Transactions
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#B9BCBF'}}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/topup.png')}
              style={{width: 40, height: 40}}
            />
            <View>
              <Text style={{color: '#5C5C5C', fontSize: 14, paddingLeft: 20}}>
                Gabriella Ikenduamaka
              </Text>
              <Text style={{color: '#B9BCBF', fontSize: 13, paddingLeft: 20}}>
                Card (****34875)
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={{color: '#5C5C5C', fontSize: 14, paddingLeft: 20}}>
                +5,000
              </Text>
              <Text style={{color: '#B9BCBF', fontSize: 13, paddingLeft: 20}}>
                Successful
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/outgone.png')}
              style={{width: 40, height: 40}}
            />
            <View>
              <Text style={{color: '#5C5C5C', fontSize: 14, paddingLeft: 20}}>
                Transfer
              </Text>
              <Text style={{color: '#B9BCBF', fontSize: 13, paddingLeft: 20}}>
                Wallet
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={{color: '#5C5C5C', fontSize: 14, paddingLeft: 20}}>
                -2,850
              </Text>
              <Text style={{color: '#B9BCBF', fontSize: 13, paddingLeft: 20}}>
                Successful
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Payment;

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
    paddingVertical: 16,
    backgroundColor: '#7A86C0',
    borderRadius: 10,
    marginTop: 15,
  },
  reg: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  wallet: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#7A86C0',
    marginVertical: 20,
    borderRadius: 10,
  },
  topup: {
    padding: 20,
    backgroundColor: '#6C7ABD',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topupText: {
    color: '#fff',
    fontSize: 16,
    paddingRight: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 240,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#7A86C0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
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
  filterprop: {
    marginBottom: -20,
    alignItems: 'flex-end',
  },
  centeredViewTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 450,
  },
  modalViewTwo: {
    margin: 20,
    backgroundColor: '#7A86C0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'flex-start',
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
  textStyleTwo: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  modalTextTwo: {
    marginBottom: 15,
    marginTop: 30,
    textAlign: 'left',
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  filterTwo: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 20,
  },
  filterpropTwo: {
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    alignItems: 'flex-end',
  },
  call: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginTop: 20,
    width: 280,
    padding: 20,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerDetails: {
    paddingBottom: 150,
  },
  callTwo: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginTop: 20,
    width: 280,
    padding: 15,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
