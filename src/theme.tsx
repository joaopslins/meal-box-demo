import { css, DefaultTheme, ThemeProvider } from "styled-components";
import React from "react";

export const theme: DefaultTheme = {
  borderRadius: "8px",
  colors: {
    primary100: "#FDF1CA",
    primary200: "#FBDF96",
    primary300: "#F4C561",
    primary400: "#E9AA3A",
    primary500: "#DB8300",
    primary600: "#BC6800",
    primary700: "#9D5100",
    primary800: "#7F3C00",

    secondary100: "#D3DAFD",
    secondary200: "#A8B6FB",
    secondary300: "#7B8DF4",
    secondary400: "#596CE9",
    secondary500: "#273DDB",
    secondary600: "#1C2EBC",
    secondary700: "#13219D",
    secondary800: "#0C167F"
  }
};

export const getThemeBorder = css`
  border-radius: ${({ theme }) => theme.borderRadius};
`;

interface Props {
  children: React.ReactNode;
}

export const ThemeProviderApp = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
