import React from "react";
import { render } from "@testing-library/react";
import styled from "styled-components";
import "jest-styled-components";
import theme, {
  space,
  zIndices,
  fontSizes,
  radii,
  fontWeights,
} from "../mocks/theme";
import get from "./index";
import { ThemeProvider } from "styled-components";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

// SINGLE ARG CASES
const Spacer = styled.div`
  margin-top: ${get("space.3")};
`;

test("it works with single arguments for: space.3", () => {
  const { container } = renderWithTheme(<Spacer />);
  expect(container.firstChild).toHaveStyleRule("margin-top", space[3]);
});

const SpacerMin = styled.div`
  margin-top: ${get("space.0")};
`;
test("it works with single arguments for: space.0", () => {
  const { container } = renderWithTheme(<SpacerMin />);
  expect(container.firstChild).toHaveStyleRule("margin-top", space[0]);
});

const Text = styled.h1`
  font-size: ${get("fontSizes.3")};
`;
test("it works with single arguments for: fontSize.3", () => {
  const { container } = renderWithTheme(<Text />);
  expect(container.firstChild).toHaveStyleRule("font-size", `${fontSizes[3]}`);
});

const TextMin = styled.h1`
  font-size: ${get("fontSizes.0")};
`;

test("it works with single arguments for: fontSize.0", () => {
  const { container } = renderWithTheme(<TextMin />);
  expect(container.firstChild).toHaveStyleRule("font-size", `${fontSizes[0]}`);
});

const TextFontWeight = styled.h1`
  font-weight: ${get("fontWeights.0")};
`;

test("it works with single arguments for: fontWeight.0", () => {
  const { container } = renderWithTheme(<TextFontWeight />);
  expect(container.firstChild).toHaveStyleRule(
    "font-weight",
    `${fontWeights[0]}`
  );
});

const Section = styled.section`
  z-index: ${get("zIndices.sun")};
`;
test("it works with single arguments for: zIndex.sun", () => {
  const { container } = renderWithTheme(<Section />);
  expect(container.firstChild).toHaveStyleRule("z-index", `${zIndices.sun}`);
});

const Button = styled.button`
  border-radius: ${get("radii.circle")};
`;
test("it works with aliased single arguments for: radii ", () => {
  const { container } = renderWithTheme(<Button />);
  expect(container.firstChild).toHaveStyleRule("border-radius", radii.circle);
});

// DUAL ARGS

const Spacer2 = styled.div`
  ${get("margin-top", 3)};
`;
test("it works with dual arguments for: space.3", () => {
  const { container } = renderWithTheme(<Spacer2 />);
  expect(container.firstChild).toHaveStyleRule("margin-top", space[3]);
});

const Text2 = styled.h1`
  ${get("font-size", 3)};
`;
test("it works with dual arguments for: fontSize.3", () => {
  const { container } = renderWithTheme(<Text2 />);
  expect(container.firstChild).toHaveStyleRule(
    "font-size",
    `${fontSizes[3]}px`
  );
});

const Text2Min = styled.h1`
  ${get("font-size", 0)};
`;
test("it works with dual arguments for: fontSize.0", () => {
  const { container } = renderWithTheme(<Text2Min />);
  expect(container.firstChild).toHaveStyleRule(
    "font-size",
    `${fontSizes[0]}px`
  );
});

const Text2FontWeight = styled.h1`
  ${get("font-weight", 0)};
`;

test("it works with dual arguments for: fontWeight.0", () => {
  const { container } = renderWithTheme(<Text2FontWeight />);
  expect(container.firstChild).toHaveStyleRule(
    "font-weight",
    `${fontWeights[0]}`
  );
});

const Section2 = styled.section`
  ${get("z-index", "sun")};
`;
test("it works with dual arguments for: zIndex.sun", () => {
  const { container } = renderWithTheme(<Section2 />);
  expect(container.firstChild).toHaveStyleRule("z-index", `${zIndices.sun}`);
});

const Button2 = styled.button`
  ${get("border-radius", "circle")};
`;
test("it works with aliased dual arguments for: radii ", () => {
  const { container } = renderWithTheme(<Button2 />);
  expect(container.firstChild).toHaveStyleRule("border-radius", radii.circle);
});

// independent uses
test("it works outside of theme for: colors.iconGrey", () => {
  const themeColor = get("colors.iconGrey")();
  expect(themeColor).toEqual("#98A2B2");
});
