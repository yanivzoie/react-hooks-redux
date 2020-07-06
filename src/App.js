import React from 'react';
import Navbar from './components/Layout/Navbar';
import Landing from './components/home/Landing';
import Users from './components/Users';
import store from './stroe';
import { Provider } from 'react-redux';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      {/* <Navbar />
      <Landing /> */}
      <Users />
    </Provider>
  );
}

export default App;
