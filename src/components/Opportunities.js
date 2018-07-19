import React, { Component } from "react"
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import ToggleDisplay from 'react-toggle-display';

import Navigation from "./Navigation";

import Fun from './Fun';


class Opportunities extends React.Component {

  render() {
  return (
    <div>
      <header class="opportunities">
        <div class="blackout">
          <Navigation />
        </div>
      </header>

      <main>
        <h1 class="sub-opp">Subcontractor Opportunities</h1>
        <p class="opp-about">We are committed to working with emerging small businesses and disadvantaged business enterprises as we select subcontracting partners for work on this project. As listed below, there are many opportunities for participation. If you are interested in working with us on this project, please fill out our Interested Firms Form.</p>

        <div class="opp-cont">
          <div class="opp-cont-left">
            <h2>Types of Subcontracting Work on the Project</h2>
            <table>
              <tr>
                <td>Civil Engineering</td>
                <td>Noise Analysis</td>
              </tr>
              <tr>
                <td>Communication Systems	</td>
                <td>Noise and Vibration Analysis</td>
              </tr>
              <tr>
                <td>Design Survey</td>
                <td>Pavement</td>
              </tr>
              <tr>
                <td>Drainage Engineering</td>
                <td>Right-of-Way Acquisition</td>
              </tr>
              <tr>
                <td>Electrical</td>
                <td>Signing</td>
              </tr>
              <tr>
                <td>Geotechnical</td>
                <td>Structure Design</td>
              </tr>
              <tr>
                <td>ITS</td>
                <td>Traffic Engineering</td>
              </tr>
              <tr>
                <td>Landscape Architecture</td>
                <td>Utility Design and Coordination</td>
              </tr>
              <tr>
                <td>Lighting and Sign Illumination</td>
                <td></td>
              </tr>
            </table>
          </div>

          <div class="opp-cont-right">
            <h2>Information on how to apply as a subcontractor</h2>
              <img class="opbutton firmsform" ng-click="toggle = ! toggle" src="/images/FORMbutton_label.png" />
              <a href="http://www.wsdot.wa.gov/Business/opportunities" target="_blank"><img class="opbutton" src="/images/WSDOTbutton_label.png" /></a>
            <a href=""><img class="opbutton" src="/images/DBEbutton_label.png" /></a>
          </div>
        </div>

      </main>

      <div class="modal-cont" ng-class="{'showform' : toggle }">
          <form class="subform" ng-submit="ctrl.sendMail()">

            <h2 class="oppsubform"><span class="close-x" ng-click="toggle = ! toggle">X</span> Subcontractors Form</h2>
            <div class="inner-form">
            <div class="form-left">
              <input type="text" name="companyName" ng-model="ctrl.nodemailer.companyName" placeholder="Company Name*" />
              <input type="text" name="pointOfContact" ng-model="ctrl.nodemailer.pointOfCantact" placeholder="Point Of Cantact*" />
              <input type="text" name="phoneNumber" ng-model="ctrl.nodemailer.phoneNumber" placeholder="Phone Number" />
              <input type="text" name="emailAddress" ng-model="ctrl.nodemailer.emailAddress" placeholder="Email Address*" />
              <input type="text" name="NAICS" ng-model="ctrl.nodemailer.NAICS" placeholder="NAICS Number" />
              <input type="text" name="CUCPID" ng-model="ctrl.nodemailer.CUCPID" placeholder="CUCP ID" />
              <input type="text" name="scopeInterest" ng-model="ctrl.nodemailer.scopeInterest" placeholder="Scope Interest" />
            </div>

              <textarea name="contactMessage" ng-model="ctrl.nodemailer.message" placeholder="Message*"></textarea>
            </div>

            <input class="buton" type="submit" value="submit" />

          </form>
      </div>

    </div>
  );
};
};

export default Opportunities;
