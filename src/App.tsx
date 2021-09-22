import React from "react";
import Providers from "./Providers";
import { Switch } from "react-router-dom";
import Routes from "./pages/Routes";

const App = () => (
  <Providers>
    <Switch>
      <Routes />
    </Switch>
  </Providers>
);

export default App;
