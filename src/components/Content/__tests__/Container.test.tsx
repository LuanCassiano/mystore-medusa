import React from "react";
import { render } from "@testing-library/react-native";
import Content from "../Content";
import { Text } from "react-native";

describe("Content Component", () => {
  it('snapshot', () => {
    const tree = render(
      <Content>
        <Text>Snapshot</Text>
      </Content>
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

    it('renders children correctly', () => {
      const { getByText } = render(
        <Content>
          <Text>Content component</Text>
        </Content>
      )
  
      const element = getByText('Content component');
      expect(element).toBeTruthy();
    });
})
