import React from 'react';
import { Octicons } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/Home/Home';
import ProfileScreen from '../screens/Profile/Profile';
import WishlistScreen from '../screens/Wishlist/Wishlist';

import HomeNavigation from './HomeNavigation/HomeNavigation'

import { Colors } from '../global/Colors';

const { Navigator, Screen } = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Navigator
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.SECONDARY
      }}
    >
      <Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Octicons
              name="home-fill"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{ 
          title: 'Wishlist',
          tabBarIcon: ({ color, size }) => (
            <Octicons
              name="heart"
              size={size}
              color={color}
            />
          )
        }}
      /> 

      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Octicons
              name="person"
              size={size}
              color={color}
            />
          )
        }}
      /> 
    </Navigator>
  )
}
