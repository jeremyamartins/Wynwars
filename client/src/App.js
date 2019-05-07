import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Episodes from './pages/Episodes'
import Characters from './pages/Characters'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Episodes" component={Episodes} />
        <Route exact path="/Characters" component={Characters} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
