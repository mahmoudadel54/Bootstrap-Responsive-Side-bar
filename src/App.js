import React from 'react';
import {Route,Switch } from 'react-router-dom'

import './App.css';
import Sidebar from './Components/SideBar1';


function App() {
  return (
    <React.Fragment>
    <main>
      <Switch>
        <Route exact path="/" component={Sidebar}/>
      </Switch>
      </main>
      </React.Fragment>
  );
}

export default App;
