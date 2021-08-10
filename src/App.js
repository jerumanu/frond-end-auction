// import logo from './logo.svg';
import './App.css';
import login from './components/login';
import registration from './components/registration';
import home from './components/home';
import detail from './components/detail';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
  

function App() {
  return (<Router>
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
              
              <li className="nav-item">
                <Link className="nav-link" to={"/deatils"}>vehicle</Link>
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
          </Switch>
        {/* </div> */}
      {/* </div> */}
    </div></Router>
  );
}

export default App;
