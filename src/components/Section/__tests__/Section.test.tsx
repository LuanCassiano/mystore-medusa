import React from "react";
import { render, screen } from "@testing-library/react-native";
import Section from "../Section";
import { Text } from "react-native";

describe("Section Component", () => {
  it("snapshot", () => {
    const tree = render(
      <Section
        sectionTitle="Offers"
        sectionSubtitle="Hot deals"
      >
        <Text>Promo items</Text>
      </Section>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("renders the section title correctly", () => {
    render(
      <Section sectionTitle="Categories">
        <Text testID="child">Child content</Text>
      </Section>
    );

    expect(screen.getByText("Categories")).toBeTruthy();
  });

  it("renders the section subtitle when provided", () => {
    render(
      <Section sectionTitle="Best Sellers" sectionSubtitle="Top products">
        <Text testID="child">Child content</Text>
      </Section>
    );

    expect(screen.getByText("Top products")).toBeTruthy();
  });

  it("does not render the subtitle when not provided", () => {
    render(
      <Section sectionTitle="Featured">
        <Text testID="child">Child content</Text>
      </Section>
    );

    const subtitle = screen.queryByText("Top products");
    expect(subtitle).toBeNull();
  });

  it("renders the children correctly", () => {
    render(
      <Section sectionTitle="News">
        <Text testID="child">Child content</Text>
      </Section>
    );

    expect(screen.getByTestId("child")).toBeTruthy();
    expect(screen.getByText("Child content")).toBeTruthy();
  });
});
