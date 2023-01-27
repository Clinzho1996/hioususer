/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPage from './MainPage';
import Messages from './Messages';
import Favorite from './Favorite';
import Payment from './Payment';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        style: {
          height: 60,
          justifyContent: 'space-around',
          border: 0,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={MainPage}
        options={{
          tabBarIcon: ({focused, tintColor}) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="home"
                  size={focused ? 30 : 30}
                  color={focused ? '#7A86C0' : '#D5D5E1'}
                />
                <Text
                  style={{
                    color: focused ? '#ff3369' : '#777777',
                    fontSize: focused ? 14 : 10,
                  }}></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="chatbox-ellipses"
                  size={focused ? 30 : 30}
                  color={focused ? '#7A86C0' : '#D5D5E1'}
                />
                <Text
                  style={{
                    color: focused ? '#ff3369' : '#777777',
                    fontSize: 14,
                  }}></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="heart"
                  size={focused ? 30 : 30}
                  color={focused ? '#7A86C0' : '#D5D5E1'}
                />
                <Text
                  style={{
                    color: focused ? '#ff3369' : '#777777',
                    fontSize: 14,
                  }}></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="wallet"
                  size={focused ? 30 : 30}
                  color={focused ? '#7A86C0' : '#D5D5E1'}
                />
                <Text
                  style={{
                    color: focused ? '#ff3369' : '#777777',
                    fontSize: 14,
                  }}></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="settings"
                  size={focused ? 30 : 30}
                  color={focused ? '#7A86C0' : '#D5D5E1'}
                />
                <Text
                  style={{
                    color: focused ? '#ff3369' : '#777777',
                    fontSize: 14,
                  }}></Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  nav: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    border: 0,
  },
});
