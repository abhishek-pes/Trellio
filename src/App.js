import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/layouts/Homepage'
import Login from './components/layouts/Login'
import Mainscreen from './components/Screens/Mainscreen'
import './App.css';
import Register from "./components/layouts/Register"
function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path = "/" component={Homepage}/>
      <section>
        <Switch>
          <Route exact path = "/src/components/Screens/Mainscreen" component={Mainscreen}/>
          <Route exact path = "/Register" component={Register}/>
        </Switch>
      </section>
      </Router>
    </div>
  );
}

export default App;
