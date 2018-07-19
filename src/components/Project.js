import React, { Component } from "react"
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import ToggleDisplay from 'react-toggle-display';

import Navigation from "./Navigation";

import Fun from './Fun';



class Project extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      goals: true,
      ben: false,
      scope: false
    };

  };

  handleClick1() {
    this.setState({
      goals: true,
      ben: false,
      scope: false
    });
  };

  handleClick2() {
    this.setState({
      goals: false,
      ben: true,
      scope: false
    });
  };

  handleClick3() {
    this.setState({
      goals: false,
      ben: false,
      scope: true
    });
  };

  render() {

  return (
    <div>
      <header class="proj">
      <div class="blackout">
        <Navigation />
      </div>
      </header>

      <main>
        <div class="top-prj">
          <h1 class="teamhead">What is the I-5 Improvements through JBLM Project?</h1>
          <p>The I-5 Improvements through JBLM project seeks to alleviate the congestion along this vital transportation corridor for both military and civilian drivers. As the region continues to thrive economically, population is steadily rising, and drivers experience congestion along the route on a daily basis.</p>

          <div class="top-prj-cont">
            <div class="top-prj-left">
              <p>To relieve some of this congestion, the first order of business for the I-5 Improvements through JBLM project is to add an auxiliary lane to widen northbound I-5 between Mounts Road and Center Drive. The improvements begin here, because this element has independent utility—it immediately benefits motorists even if other aspects of the larger Improvements project are not yet complete.</p>
              <p>This portion of the project includes the design and construction of several key improvements to this corridor, including:</p>
            </div>
            <div class="top-prj-right">
              <ul>
                <li>Rebuilding interchanges at Thorne Lane, Berkeley Street, and Steilacoom-DuPont Road to incorporate roundabouts</li>
                <li>Adding one northbound lane from Mounts Road to Thorne Lane to Steilacoom-DuPont Road</li>
                <li>Adding one southbound lane from Thorne Lane</li>
                <li>Building a new connector road between Gravelly Lake Drive and Thorne Lane.</li>
                <li>Building a bicycle and pedestrian path along I-5</li>
                <li>Building a new DuPont Gate to JBLM</li>
              </ul>
            </div>
          </div>
        </div>

        <ul class="more-info">
          <li onClick={ () => this.handleClick1() }>GOALS</li>
          <li onClick={ () => this.handleClick2() }>BENEFITS</li>
          <li onClick={ () => this.handleClick3() }>SCOPE</li>
        </ul>

        <ToggleDisplay show={this.state.goals}>
        <div class="more-info-box" id="goals">
          <h2>1. Excellent Project Management and Collaboration</h2>
            <ul>
              <li>Partnering with WSDOT and other key stakeholders to communicate effectively, identify and resolve issues early and efficiently at the Project level and manage risks.</li>
              <li>Collaboration with public agencies and stakeholders will be required for this Project.</li>
              <li>Close coordination with the adjacent military installations (JBLM and Camp Murray) is necessary to ensure that base security issues are never compromised during design and construction activities.</li>
            </ul>

          <h2>2. Minimize Project Impacts</h2>
            <ul>
              <li>Minimize impacts to the environment, local businesses and residents through effective design and construction methods and community outreach.</li>
              <li>Minimize impacts to the traveling public through use of effective design and construction methods, timely and reliable Project outreach, and optimize operations through effective MOT and staging.</li>
            </ul>

          <h2>3. Quality</h2>
            <ul>
              <li>Implement a strong quality management program to ensure Work meets or exceeds WSDOT expectations and Contract requirements.</li>
            </ul>
        </div>
        </ToggleDisplay>

        <ToggleDisplay show={this.state.ben}>
        <div class="more-info-box" id="ben">
        <p>The changes would reduce chronic traffic congestion through the JBLM corridor. New interchanges that incorporate roundabouts and grade separation from the rail line improves traffic flow and reduces the potential for collisions.</p>

        <h2>Congestion Relief</h2>
          <ul>
            <li>Additional capacity will improve traffic flow.</li>
            <li>Northbound I-5 auxiliary lanes will be added between Berkeley Street and Gravelly Lake Drive, providing a supplemental lane for vehicles entering and exiting I-5.</li>
            <li>WSDOT’s Benefit-Cost Analysis Report (pdf 695 kb) – Download</li>
          </ul>

        <h2>Safety</h2>
          <ul>
            <li>Grade separation from rail line.</li>
            <li>Builds roundabouts at Thorne Lane and Berkeley Street. Roundabouts are shown to reduce injury crashes by 75 percent at intersections where stop signs or signals were previously used for traffic control.</li>
          </ul>
        </div>
        </ToggleDisplay>

        <ToggleDisplay show={this.state.scope}>
        <div class="more-info-box" id="scope">
        <p>The Project provides improvement of I-5 from Steilacoom-DuPont Road to Thorne Lane, by widening I-5 to accommodate four thru-lanes in each direction. New northbound I-5 auxiliary lanes will be constructed between Berkeley Street and Thorne Lane interchanges, and Thorne Lane and Gravelly Lake Drive interchanges. The Berkeley Street and Thorne Lane interchanges will be reconstructed including grade separation over the Sound Transit railroad and have roundabouts at the ramp terminal intersections.</p>

        <p>Local road improvements within the City of Lakewood will be constructed as part of the Berkeley Street and Thorne Lane interchange reconstruction. The approach roadways to the JBLM Madigan Gate will be reconstructed as part of the Berkeley Street interchange reconstruction.</p>

        <p>Other major work includes utility relocation, earthwork grading, bridge construction and demolition, retaining walls, storm water management facilities, concrete barrier, 1 guardrail, HMA paving, noise walls, illumination, ITS, and overhead and sign structures.</p>
        </div>
        </ToggleDisplay>

      </main>

    </div>
  );
};

};

export default Project;
