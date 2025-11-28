import React from 'react';
import { View, Text } from 'react-native';
import { Fonts } from '../../global/Fonts';

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: Fonts.black }}>Profile Screen!</Text>
    </View>
  );
}
