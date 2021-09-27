import { DefaultTheme, ThemeProvider } from "styled-components";
import React from "react";

export const theme: DefaultTheme = {
  borderRadius: "4px",
  colors: {
    primary: "#2F8F7D",
    primary2: "#3DDBBE",
    secondary: "#DB9232",
    tertiary: "#13218F",
    tertiary2: "#273DDB"
  }
};

export const ThemeProviderApp = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
