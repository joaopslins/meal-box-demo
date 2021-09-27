import { ThemeProvider } from "styled-components";
import React, { useMemo } from "react";

export const colors = {
  primary: "#2F8F7D",
  primary2: "#3DDBBE",
  secondary: "#DB9232",
  tertiary: "#13218F",
  tertiary2: "#273DDB"
};

export const ThemeProviderApp = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const theme = useMemo(
    () => ({
      colors
    }),
    []
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
