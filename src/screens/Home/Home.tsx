import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

import { Fonts, } from '../../global/Fonts';
import { Colors } from '../../global/Colors';

import { useCategories } from '../../hooks/useCategories';

import Category from './components/Category/Category';
import Title from '../../components/Title/Title';
import Content from '../../components/Content/Content';
import Container from '../../components/Container/Container';
import { useProducts } from '../../hooks/useProducts';

import { IProduct } from '../../interfaces/IProduct';

export default function Home() {
  const { data: categoryData, isPending: loadCategories } = useCategories();
  const { data: productsData, isPending: loadProducts } = useProducts();

  if (loadCategories && loadProducts) return <ActivityIndicator size="large" color={Colors.PRIMARY} />

  const _renderItem = (item: IProduct) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: Colors.LIGHT_GRAY,
            borderRadius: 15,
            marginBottom: 10,
          }}
        >
          <Image
            source={{ uri: item.thumbnail }}
            style={{ width: 150, height: 150, borderRadius: 10, margin: 5 }}
          />
        </View>

        <View>
          <Text>{item.title}</Text>
          <Text>R$ {item.variants[0].calculated_price?.calculated_amount.toFixed(2) || 0}</Text>
        </View>
      </View>
    )
  }

  return (
    <Container>
      <Content>
        <Title
          title='Categories'
          textColor={Colors.BLACK}
          textSize={24}
          font={Fonts.bold}
        />
        
        <Category data={categoryData} />

        <Title
          title='Best Sellers'
          textColor={Colors.BLACK}
          textSize={24}
          font={Fonts.bold}
        />

        <FlatList
          data={productsData || []}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => _renderItem(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, marginVertical: 10 }}
        />
      </Content>
    </Container>
  );
}
