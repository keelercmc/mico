import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Toolbar from '../src/components/Toolbar/Toolbar.js';
import Login from '../src/components/Login/Login';
import Dashboard from '../src/components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' component={Toolbar}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/' exact component={Dashboard}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
