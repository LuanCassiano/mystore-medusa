import React from 'react';
import { View, Text } from 'react-native';
import { Fonts } from '../../global/Fonts';

export default function Wishlist() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: Fonts.black }}>Wishlist Screen!</Text>
    </View>
  );
}
