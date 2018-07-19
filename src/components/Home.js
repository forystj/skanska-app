import React, { Component } from "react"
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import ToggleDisplay from 'react-toggle-display';

import Navigation from "./Navigation";

import Fun from './Fun';

class Home extends React.Component {

  render() {
  return (

    <div>

    <header class="home">
      <Navigation />


      <div class="head-content">
        <h1>I-5 Improvements through JBLM</h1>
        <div class="post-thumbs">
          <NavLink to="/the-project">
            <div class="post-thumbnail">
              <h3>The Project</h3>
            </div>
          </NavLink>
          <NavLink to="/the-team">
            <div class="post-thumbnail">
              <h3>The Team</h3>
            </div>
          </NavLink>
          <NavLink to="/opportunities">
            <div class="post-thumbnail">
              <h3>Opportunities</h3>
            </div>
          </NavLink>
        </div>
      </div>
    </header>

    <main>
      <div class="main-top">
        <h2>About Design-Build</h2>
        <p>Design build (DB) is a project delivery model in which design and construction services are contracted to a single entity, the design builder. This model harkens back to a master builder approach and supplants the design-bid-build model, in which an owner contract with a designer to create the project and then a builder to construct it. Instead, the DB model offers greater adaptability and flexibility by allowing the owner and DB firm to collaborate on a design with an eye for constructability. In the case of the I-5 Improvements through JBLM project, the DB model ultimately supports design innovation and cost savings by creating projects tailor-made for Washington and JBLM, built by our local experts, as part of an efficient collaborative relationship among DB firm Skanska, designer WSP and WSDOT.</p>

        <p>The DB model also allows for an ongoing design process to keep the project nimble. With designers, engineers and craft personnel all working in partnership with WSDOT, unforeseen construction hindrances can be readily accommodated into the design. Consequently, phasing and scheduling shifts can be immediately implemented to keep projects advancing on time and within budget. And a swiftly progressing, fiscally responsible project keeps residents moving freely along their highways.</p>

        <p class="subcontract"> If you are a subcontractor interested in joining this dynamic team, please see our <a ng-click="ctrl.scrollit()" ui-sref="opportunities">Contract Opportunities</a> page for more information or to complete our <span ng-click="toggle = ! toggle">Interested Bidders</span> form.</p>
      </div>
      <div class="main-bottom">
        <h1>”</h1>
        <p>Skanska USA performed admirably during the Holgate to King Street – Stage 2 contract with the Washington State Department of Transportation. Despite the numerous owner-initiated and third-party changes issued during the contract, Skanska remained solution focused and far exceeded the project goals. The Skanska team was collaborative, solution focused and a model of professionalism and integrity.</p>
        <h2>Matthew Preedy, PE</h2>
        <h3>Deputy Project Administrator | Alaskan Way Viaduct</h3>
      </div>
    </main>

    </div>

  );
};
};

export default Home;
