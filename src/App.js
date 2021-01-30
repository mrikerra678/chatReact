import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import Dashboard from './layouts/Dashboard.jsx';
import store from '../src/store';
import {Provider} from 'react-redux';
import PruebasMapeo from './PruebasMapeo/PruebasMapeo.jsx'

import ChatRoom from "./Chat/ChatRoom.jsx";

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App = () => (
  <Provider store={store}> 
  <div className="App">
    <BrowserRouter>
      <Switch>
        {/* PARA HACER PRUEBAS CAMBIAR EL ORDEN */}
        <Route path="/" component={ChatRoom} />
      </Switch>
    </BrowserRouter>
  </div>
  </Provider>


);

export default App;
