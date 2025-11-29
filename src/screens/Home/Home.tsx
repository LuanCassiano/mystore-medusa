import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Fonts, } from '../../global/Fonts';
import { Colors } from '../../global/Colors';

import { useCategories } from '../../hooks/useCategories';

import Category from './components/Category/Category';
import Title from '../../components/Title/Title';
import Content from '../../components/Content/Content';
import Container from '../../components/Container/Container';

export default function Home() {
  const { data, isPending } = useCategories();

  if (isPending) return <ActivityIndicator size="large" color={Colors.PRIMARY} />

  return (
    <Container>
      <Content>
        <Title
          title='Categories'
          textColor={Colors.BLACK}
          textSize={24}
          font={Fonts.bold}
        />
        <Category data={data} />
      </Content>
    </Container>
  );
}
