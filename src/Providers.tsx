import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ThemeProviderApp } from "./theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <ThemeProviderApp>{children}</ThemeProviderApp>
      </HashRouter>
    </Provider>
  );
};

export default Providers;
