import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import CheckAuth from "./hocs/CheckAuth";

import "antd/dist/antd.dark.less";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <HashRouter>
      <CheckAuth>
        <App />
      </CheckAuth>
    </HashRouter>
  </Provider>
);
