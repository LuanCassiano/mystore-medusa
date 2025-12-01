import React from 'react';
import { render } from '@testing-library/react-native';
import Container from '../Container';
import { Text } from 'react-native';

describe('Container component', () => {
  it('snapshot', () => {
    const tree = render(
      <Container>
        <Text>Snapshot</Text>
      </Container>
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <Text>Container component</Text>
      </Container>
    )

    const element = getByText('Container component');
    expect(element).toBeTruthy();
  });
});

