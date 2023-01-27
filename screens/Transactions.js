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

const Transactions = ({navigation}) => {
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
        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
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
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../assets/notify.png')}
              style={{width: 25, height: 25}}
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
          Transactions
        </Text>
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
            source={require('../assets/topup.png')}
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
            source={require('../assets/topup.png')}
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
            source={require('../assets/topup.png')}
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
            source={require('../assets/topup.png')}
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
            source={require('../assets/topup.png')}
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
            source={require('../assets/topup.png')}
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
            source={require('../assets/topup.png')}
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
    </ScrollView>
  );
};

export default Transactions;

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
});
