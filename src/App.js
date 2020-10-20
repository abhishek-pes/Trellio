import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/layouts/Homepage'
import Login from './components/layouts/Login'
import './App.css';
import Register from "./components/layouts/Register"
function App() {
  return (
    <div className="App">
    <header className="App-header">
    <h1 class = "name">Trellio</h1>
    </header>
    <Router>
      <Route exact path = "/" component={Homepage}/>
      <section>
        <Switch>
          <Route exact path = "/Login" component={Login}/>
          <Route exact path = "/Register" component={Register}/>
        </Switch>
      </section>
      </Router>
    </div>
  );
}

export default App;
