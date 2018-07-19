import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import ToggleDisplay from 'react-toggle-display';


import Home from "./components/Home";
import Project from "./components/Project";
import Team from "./components/Team";
import Opportunities from "./components/Opportunities";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Up from "./components/Up";

class App extends Component {

  render() {
    return (
      <BrowserRouter>

        <div>

          <Switch>
            <Route path ="/" component={Home} exact />
            <Route path ="/the-project" component={Project} />
            <Route path ="/the-team" component={Team} />
            <Route path ="/opportunities" component={Opportunities} />
            <Route path ="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>

          <Up />

          <Footer />

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
