import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/store'
import { renderRoutes } from 'react-router-config'
import routes from './route/index'
import { HashRouter } from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter>
          {renderRoutes(routes)}
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
