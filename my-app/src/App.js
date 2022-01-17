import React from 'react';
import './App.css';
import SignInOutContainer from './components/Login/Containers';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accounts from './components/Mainapp/Accounts/Accounts';
import Dashboard from './components/Mainapp/Dashboard';
import Entities from './components/Mainapp/Entities/Entities';
import Settings from './components/Mainapp/Settings/Settings';
import Transactions from './components/Mainapp/Transactions/Transactions';
 


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/Dashboard" component={Dashboard}></Route>
          <Route exact path="/Accounts" component={Accounts}></Route>
          <Route exact path="/Entities" component={Entities}></Route>
          <Route exact path="/Transactions" component={Transactions}></Route>
          <Route exact path="/Settings" component={Settings}></Route>
          <SignInOutContainer/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

