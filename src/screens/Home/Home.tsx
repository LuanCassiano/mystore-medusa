import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Fonts } from '../../global/Fonts';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { GlobalParamList } from '../../routes/types';
import { useCategories } from '../../hooks/useCategories';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from '../../global/Colors';

export default function Home() {
  const { navigate } = useNavigation<NavigationProp<GlobalParamList>>();

  const { data, isPending, error } = useCategories();

  if (isPending) return <ActivityIndicator size="large" color={Colors.PRIMARY} />

  const _renderItem = (item: { name: string }) => {
    return (
      <TouchableOpacity 
        style={{
          padding: 12,
          backgroundColor: Colors.LIGHT_GRAY,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontFamily: Fonts.semiBold,
            fontSize: 14,
            color: Colors.SECONDARY,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontFamily: Fonts.bold,
            fontSize: 24,
            color: Colors.BLACK,
          }}
        >
          Categories
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => _renderItem(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, marginVertical: 10 }}
        />
      </View>
    </View>
  );
}
