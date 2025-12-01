import React from 'react';

import HomeScreen from '../../screens/Home/Home';
import ProductListScreen from '../../screens/ProductList/ProductList';
import NotificationScreen from '../../screens/Notification/Notification';
import BagScreen from '../../screens/Bag/Bag';

import { createStackNavigator } from '@react-navigation/stack';

import { GlobalParamList } from '../types';

import Header from '../../components/Header/Header';

const { Navigator, Screen } = createStackNavigator<GlobalParamList>();

export default function RootNavigator() {
  return (
    <Navigator
      screenOptions={{
        header: (props) => <Header {...props} />
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          title: 'Discover',
        }}
      />
      <Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ 
          title: 'Products',
        }}
      />
      <Screen
        name="Notification"
        component={NotificationScreen}
        options={{ 
          title: 'Notifications',
        }}
      />
      <Screen
        name="Bag"
        component={BagScreen}
        options={{ 
          title: 'My Bag',
        }}
      />
    </Navigator>
  )
}
