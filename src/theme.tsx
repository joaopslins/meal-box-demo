import { css, DefaultTheme, ThemeProvider } from "styled-components";
import React from "react";

export const theme: DefaultTheme = {
  borderRadius: "8px",
  colors: {
    primary: "#2F8F7D",
    primary2: "#3DDBBE",
    secondary: "#DB9232",
    tertiary: "#13218F",
    tertiary2: "#273DDB"
  }
};

export const getThemeBorder = css`
  border-radius: ${props => props.theme.borderRadius};
`;

export const ThemeProviderApp = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
