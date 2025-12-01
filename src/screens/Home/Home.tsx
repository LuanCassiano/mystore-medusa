import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Colors } from '../../global/Colors';

import { useCategories } from '../../hooks/useCategories';
import { useProducts } from '../../hooks/useProducts';

import Content from '../../components/Content/Content';
import Container from '../../components/Container/Container';
import List from '../../components/List/List';
import CategoryItem from './components/CategoryItem/CategoryItem';
import ProductCard from './components/ProductCard/ProductCard';
import Section from '../../components/Section/Section';

export default function Home() {
  const { data: categoryData, isPending: loadCategories } = useCategories();
  const { data: productsData, isPending: loadProducts } = useProducts();

  if (loadCategories && loadProducts) return <ActivityIndicator size="large" color={Colors.PRIMARY} />

  return (
    <Container>
      <Content>
        <Section sectionTitle='Categories'>
          <List
            data={categoryData || []}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CategoryItem item={item} />}
            horizontal
          />
        </Section>

        <Section sectionTitle='Best Sellers'>
          <List
            data={productsData || []}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard item={item} />}
            horizontal
          />
        </Section>
      </Content>
    </Container>
  );
}
