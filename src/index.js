import React from "react";
import ReactDOM from "react-dom";
//router
import { BrowserRouter } from "react-router-dom";
//react-query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
//redux
import { Provider } from "react-redux";
import store from "./store";
//app
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
