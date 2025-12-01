import React from "react";
import { render, screen } from "@testing-library/react-native";
import ProductCard from "../ProductCard";
import { IProduct } from "../../../../../interfaces/IProduct";

const mockItem: IProduct = {
  id: "1",
  title: "Product 1",
  thumbnail: "https://via.placeholder.com/150",
  description: 'this is a description',
  variants: [
    {
      calculated_price: {
        calculated_amount: 123.45,
      },
    },
  ],
};

describe("ProductCard Component", () => {
  it("snapshot", () => {
    const tree = render(<ProductCard item={mockItem} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders product title correctly", () => {
    render(<ProductCard item={mockItem} />);
    expect(screen.getByText("Product 1")).toBeTruthy();
  });

  it("renders product price correctly", () => {
    render(<ProductCard item={mockItem} />);
    expect(screen.getByText("R$ 123.45")).toBeTruthy();
  });

  it("renders the product image", () => {
    const { getByTestId } = render(<ProductCard item={mockItem} />);
    const image = getByTestId("product-image");
    expect(image.props.source.uri).toBe(mockItem.thumbnail);
  });
});