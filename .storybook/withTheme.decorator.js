import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/theme";

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

// Sets the background based on theme
const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const withTheme = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider theme={THEMES[theme] || THEMES["light"]}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};
