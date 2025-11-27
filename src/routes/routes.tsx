import React from 'react';

import HomeScreen from '../screens/Home/Home';
import ProductListScreen from '../screens/ProductList/ProductList';

import { createStackNavigator } from '@react-navigation/stack';
import { GlobalParamList } from './types';

const { Navigator, Screen } = createStackNavigator<GlobalParamList>();

export default function RootNavigator() {
  return (
    <Navigator
      screenOptions={{
        header: () => <></>
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="ProductList" component={ProductListScreen} />
    </Navigator>
  )
}
