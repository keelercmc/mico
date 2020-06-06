import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Login from '../src/components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' exact component={Login}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
