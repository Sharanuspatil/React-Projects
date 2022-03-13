import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// redux provider
import { Provider } from "react-redux";
import { store } from "./redux/reducer/store";
// redux persist
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
