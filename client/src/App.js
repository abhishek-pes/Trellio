import React, {useState , useCallback} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Homepage from './components/layouts/Homepage'
import Login from './components/layouts/Login'
import Register from "./components/layouts/Register"
import {authContext} from "./context/auth-context"
import POSTS from './components/Screens/POSTS'
import Learn from './components/layouts/Learn'
import Project from './components/Screens/Project'
import Myprojects from './components/Screens/Myprojects'
import UpsatePosts from './components/Screens/UpdatePosts'
import Todo from './components/Screens/Todo'

function App() {
const [isLoggedIn, setIsLoggedIn] = useState()

const login = useCallback(() => {
  setIsLoggedIn(true)
},[])

const logout = useCallback(() => {
  localStorage.clear()
  setIsLoggedIn(false)
},[])
console.log(isLoggedIn)

let routes



if(isLoggedIn)
{
  routes = (
    <Switch>
      <Route exact path = "/POSTS" component={POSTS}/>
      <Route exact path = "/Learn" component = {Learn}/>
      <Route exact path = "/Projects" component = {Project}/>
      <Route exact path = "/Myprojects" component = {Myprojects}/>
      <Route exact path = "/UpdatePosts" component={UpsatePosts}/>
      <Route exact path = "/Todo" component={Todo}/>
      <Redirect to = '/Projects'></Redirect>
    </Switch>
  )
}else{
  routes = (
        <Switch>
          <Route exact path = "/Register" component={Register}/>
          <Route exact path = "/Login" component = {Login}/>
          <Route exact path = "/Learn" component = {Learn}/>
          <Redirect to = '/'></Redirect>
        </Switch>
  )
}

  return (
      <authContext.Provider value= {{isLoggedIn : isLoggedIn , login : login , logout : logout}}>
        <Router>
        <Route exact path = "/" component={Homepage}/>

        <main>
          {routes}
        </main>
      </Router>
      </authContext.Provider>
  );
}

export default App;
