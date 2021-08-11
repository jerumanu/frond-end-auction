// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import login from './components/login'; 
import registration from './components/registration';
import home from './components/home';
import detail from './components/detail';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux';
import Activate from './components/Activate';
import Facebook from './components/Facebook';
import Google from './components/Google';
import ResetPassword from './components/ResetPassword';
import ResetPasswordConfirm from './components/ResetPasswordConfirm';
class App extends Component {
  render() {
  return (
    <Provider store={store}>

<Router>
    <div className="App">
      
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Home</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              
             
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="auth-wrapper">
        <div className="auth-inner"> */}
          <Switch>
            <Route exact path='/' component={home} />
            <Route path="/sign-in" component={login} />
            <Route path="/sign-up" component={registration} />
            <Route  path="/detail" component={detail} />
            <Route exact path='/facebook' component={Facebook} />
            <Route exact path='/google' component={Google} />
            <Route exact path='/reset-password' component={ResetPassword} />
            <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
            <Route exact path='/activate/:uid/:token' component={Activate} />
       
          </Switch>
        {/* </div> */}
      {/* </div> */}
    </div>
    </Router>
    </Provider>
  );
}
}
export default App;
