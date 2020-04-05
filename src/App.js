import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import logo from './logo.svg';
import Header from './components/layout/Header'
import './App.css';
import {Login} from "./components/Login";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Route path="/login" component={Login}/>
          </div>
      </Router>
  );
}

export default App;
