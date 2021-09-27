import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProviderApp } from "./theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProviderApp>{children}</ThemeProviderApp>
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
