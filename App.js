import React from 'react';
import { Provider as StoreProvider } from 'react-redux'
import store from "./redux"
import Pages from "./navigation"
const App = () => {
  return (
    <StoreProvider store={store}>
      <Pages>
      </Pages>
    </StoreProvider>
  );
};

export default App;
