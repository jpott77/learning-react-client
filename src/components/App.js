import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENTS
import Home from "./home";
import Login from "./login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/loginandregister" component={Login}></Route>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;