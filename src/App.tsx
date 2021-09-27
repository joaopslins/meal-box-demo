import React from "react";
import Providers from "./Providers";
import { Switch } from "react-router-dom";
import Routes from "./pages/Routes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const App = () => (
  <Providers>
    <GlobalStyle />
    <Switch>
      <Routes />
    </Switch>
  </Providers>
);

export default App;
