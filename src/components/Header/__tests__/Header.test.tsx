import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Header from "../Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackHeaderProps } from "@react-navigation/stack";

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: jest.fn(),
}));

describe("Header Component", () => {
  const mockGoBack = jest.fn();
  const mockNavigate = jest.fn();

  const defaultProps: Partial<StackHeaderProps> = {
    navigation: { goBack: mockGoBack, navigate: mockNavigate } as any,
    route: { name: "Home", key: "Home-123" },
    options: { title: "Home Page" },
    back: { title: undefined, href: undefined }, 
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useSafeAreaInsets as jest.Mock).mockReturnValue({ top: 10, bottom: 0, left: 0, right: 0 });
  });
  it("snapshot", () => {
    const tree = render(<Header {...(defaultProps as StackHeaderProps)} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders title correctly", () => {
    const { getByText } = render(<Header {...(defaultProps as StackHeaderProps)} />);
    expect(getByText("Home Page")).toBeTruthy();
  });

  it("renders back button when 'back' is true", () => {
    const props = { ...defaultProps, back: true };
    const { getByTestId } = render(<Header {...(defaultProps as StackHeaderProps)} />);
    const backButton = getByTestId("back-button");
    expect(backButton).toBeTruthy();
  });

  it("calls navigation.goBack when back button is pressed", () => {
    const props = { ...defaultProps, back: true };
    const { getByTestId } = render(<Header {...(defaultProps as StackHeaderProps)} />);
    fireEvent.press(getByTestId("back-button"));
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  it("calls navigation.navigate when right button is pressed", () => {
    const { getByTestId } = render(<Header {...(defaultProps as StackHeaderProps)} />);
    fireEvent.press(getByTestId("right-button"));
    expect(mockNavigate).toHaveBeenCalledWith("Notification");
  });
});