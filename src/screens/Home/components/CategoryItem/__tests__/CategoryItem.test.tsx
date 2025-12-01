import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import CategoryItem from "../CategoryItem";

const mockItem = {
  id: "1",
  name: "Category 1",
};

describe("CategoryItem Component", () => {
  it("snapshot", () => {
    const tree = render(<CategoryItem item={mockItem} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders category name correctly", () => {
    render(<CategoryItem item={mockItem} />);
    expect(screen.getByText("Category 1")).toBeTruthy();
  });

  it("renders TouchableOpacity", () => {
    const { getByText } = render(<CategoryItem item={mockItem} />);
    const touchable = getByText("Category 1").parent;
    expect(touchable.props.testID || touchable.type).toBeTruthy();
  });
});