import "../styles/globals.css";

import React from "react";
import App from "next/app";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
