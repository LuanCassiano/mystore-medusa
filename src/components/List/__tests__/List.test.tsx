import React from "react";
import { render, screen } from "@testing-library/react-native";
import List from "../List";
import { Text } from "react-native";

type Item = { id: string; name: string };

const mockData: Item[] = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
];

describe("List Component", () => {
  it("snapshot", () => {
    const tree = render(
      <List
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        horizontal
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("renders the list with provided data", () => {
    render(
      <List
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text testID="list-item">{item.name}</Text>}
      />
    );

    const items = screen.getAllByTestId("list-item");
    expect(items.length).toBe(2);
    expect(items[0].props.children).toBe("Item 1");
  });

  it("calls renderItem for each item", () => {
    const renderItemMock = jest.fn(({ item }) => (
      <Text testID="item">{item.name}</Text>
    ));

    render(
      <List
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={renderItemMock}
      />
    );

    expect(renderItemMock).toHaveBeenCalledTimes(mockData.length);
  });

  it("passes horizontal prop correctly", () => {
    const { UNSAFE_getByType } = render(
      <List
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        horizontal
      />
    );

    const flatList = UNSAFE_getByType(require("react-native").FlatList);

    expect(flatList.props.horizontal).toBe(true);
  });

  it("renders empty list when data is empty", () => {
    render(
      <List
        data={[]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text testID="item">Test item</Text>}
      />
    );

    const items = screen.queryAllByTestId("item");
    expect(items.length).toBe(0);
  });
});
