import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/layouts/Homepage'
import Login from './components/layouts/Login'
import './App.css';
import Register from "./components/layouts/Register"
function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path = "/" component={Homepage}/>
      <section>
        <Switch>
          <Route exact path = "/Login" component={Login}/>
          <Route exact path = "/Register" component={Register}/>
        </Switch>
      </section>
    </div>
    </Router>
  );
}

export default App;
