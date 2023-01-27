/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import RegisterSuccess from '../screens/RegisterSuccess';
import ForgotPassword from '../screens/ForgotPassword';
import ChangePassword from '../screens/ChangePassword';
import ResetCode from '../screens/ResetCode';
import Success from '../screens/Success';
import Verified from '../screens/Verified';
import Welcome from '../screens/Welcome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MessageDetails from '../screens/MessageDetails';
import Supermarket from '../screens/Supermarket';
import StoreDetails from '../screens/StoreDetails';
import Reviews from '../screens/Reviews';
import Photos from '../screens/Photos';
import Shipping from '../screens/Shipping';
import ShippingDetails from '../screens/ShippingDetails';
import Pickup from '../screens/Pickup';
import CustomDrawer from './CustomDrawer';
import Profile from '../screens/Profile';
import SignOut from '../screens/SignOut';
import Receipts from '../screens/Receipts';
import Transactions from '../screens/Transactions';
import About from '../screens/About';
import Chat from '../screens/Chat';
import Order from '../screens/Order';
import Notifications from '../screens/Notifications';
import BlockBusiness from '../screens/BlockBusiness';
import ReportBusiness from '../screens/ReportBusiness';
import ReviewBusiness from '../screens/ReviewBusiness';
import ShareBusiness from '../screens/ShareBusiness';
import Home from '../screens/Home';
import Onboarding from '../screens/Onboarding';
import EmailVerify from '../screens/EmailVerify';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        DrawerNavigatorBarVisible: false,
      }}>
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="Onboarding" component={Onboarding} />
      <Drawer.Screen name="EmailVerify" component={EmailVerify} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Forgot" component={ForgotPassword} />
      <Drawer.Screen name="Verified" component={Verified} />
      <Drawer.Screen name="Success" component={Success} />
      <Drawer.Screen name="SignOut" component={SignOut} />
      <Drawer.Screen name="Registersuccess" component={RegisterSuccess} />
      <Drawer.Screen name="Changepass" component={ChangePassword} />
      <Drawer.Screen name="Reset" component={ResetCode} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Messagedetails" component={MessageDetails} />
      <Drawer.Screen name="Supermarket" component={Supermarket} />
      <Drawer.Screen name="StoreDetails" component={StoreDetails} />
      <Drawer.Screen name="Photos" component={Photos} />
      <Drawer.Screen name="Reviews" component={Reviews} />
      <Drawer.Screen name="Shipping" component={Shipping} />
      <Drawer.Screen name="ShippingDetails" component={ShippingDetails} />
      <Drawer.Screen name="Pickup" component={Pickup} />
      <Drawer.Screen name="Receipts" component={Receipts} />
      <Drawer.Screen name="Transactions" component={Transactions} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="Order" component={Order} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Block" component={BlockBusiness} />
      <Drawer.Screen name="Report" component={ReportBusiness} />
      <Drawer.Screen name="ReviewBusiness" component={ReviewBusiness} />
      <Drawer.Screen name="Share" component={ShareBusiness} />
    </Drawer.Navigator>
  );
};

export default AppStack;
