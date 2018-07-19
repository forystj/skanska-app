import React, { Component } from "react"
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import ToggleDisplay from 'react-toggle-display';

import Navigation from "./Navigation";

import Fun from './Fun';



class Team extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      care: true,
      ethics: false,
      together: false,
      customers: false
    };

  };

  handleClick1() {
    this.setState({
      care: true,
      ethics: false,
      together: false,
      customers: false
    });
  };

  handleClick2() {
    this.setState({
      care: false,
      ethics: true,
      together: false,
      customers: false
    });
  };

  handleClick3() {
    this.setState({
      care: false,
      ethics: false,
      together: true,
      customers: false
    });
  };

  handleClick4() {
    this.setState({
      care: false,
      ethics: false,
      together: false,
      customers: true
    });
  };

  render() {

  return (

    <div>
      <header class="team">
        <div class="blackout">
          <Navigation />
        </div>
      </header>

      <main>
        <div class="top-prj">
          <h1 class="teamhead">The Right Team to Deliver The Project</h1>
          <div class="top-prj-cont">
            <div class="top-prj-left">
              <img src="/images/SKANSKA-orig-logo-RBG-1024x119.png" />
              <p>Skanska USA maintains annual revenue of approximately $6 billion. Each year, we produce nearly 46 million man-hours, and our work boasts a safety experience rate five times better than the industry average. Much of our work locally and nationally involves complex and challenging heavy civil and transit projects. Skanska’s core values underscore all we do: Care for Life. Act ethically and transparently. Be better, together. Commit to Customers. We look forward to applying these values to engage with the Cities of DuPont, Lakewood, Steilacoom, Yelm and Lacey, Joint Base Lewis McChord, as well as the local stakeholders, residents and businesses who truly bring life to these communities.</p>
            </div>
            <div class="top-prj-right">
              <img src="/images/wsp_red-1024x487.jpg" />
              <p>The Skanska team, composed of Skanska and lead designer WSP, brings the right experience collaborating to deliver successful projects, as well as nationwide experience in designing and constructing exceptional highway systems. Efficient exchange of resources between these industry experts has supported many successes. We operate with a project-first philosophy and a goal-focused culture, and we communicate openly and transparently to operate with high ethical standards.</p>
            </div>
          </div>
        </div>

        <div class="values-box">
         <h1 class="sk-values">Skanska Values</h1>
          <ul class="values">
            <li class="care" onClick={ () => this.handleClick1() }>CARE</li>
            <li class="ethics" onClick={ () => this.handleClick2() }>ETHICS</li>
            <li class="together" onClick={ () => this.handleClick3() }>TOGETHER</li>
            <li class="customers" onClick={ () => this.handleClick4() }>CUSTOMERS</li>
          </ul>

          <ToggleDisplay show={this.state.care}>
          <div ng-show="showCare" class="care-box">
            <h1>Care for Life</h1>
            <p>We care for life of people and the environment. We work safely, or not at all. We never walk by if we notice unsafe actions. We support health and well-being. We promote green solutions and we run our operations in a green way. We are accountable for future generations.</p>
          </div>
          </ToggleDisplay>

          <ToggleDisplay show={this.state.ethics}>
          <div ng-show="showEthics" class="ethics-box">
            <h1>Act Ethically and Transparently</h1>
            <p>We do business with a high degree of integrity and transparency. We live by our Code of Conduct and never accept shortcuts. We foster a working climate where everyone can speak their mind.</p>
          </div>
          </ToggleDisplay>

          <ToggleDisplay show={this.state.together}>
          <div ng-show="showTogether" class="better-box">
            <h1>Be Better - Together</h1>
            <p>We always strive to be better in all we do. We are a learning organization and generously share our expertise. We take pride in quality and innovation. We build One Skanska teams together with customers, partners and communities. We leverage diversity to deliver the best solutions. We foster an inclusive culture where we are open and fair, showing trust and respect for each other.</p>
          </div>
          </ToggleDisplay>

          <ToggleDisplay show={this.state.customers}>
          <div ng-show="showCustomers" class="customers-box">
            <h1>Commit to Customers</h1>
            <p>We help our customers to be successful in their business. We strive to understand thir needs and their customers' needs. We are here to help our customers turn their visions into reality.</p>
          </div>
          </ToggleDisplay>

        </div>

        <h1 class="sk-values">Our Experience</h1>
        <div class="experience">
          <div tabindex="0" class="exp-box-cont">
            <div class="exp-box one">
              <h3>SR 99 Alaskan Way Viaduct, Holgate to King Street Replacement</h3>
            </div>
          </div>
          <div tabindex="0" class="exp-box-cont">
            <div class="exp-box two">
              <h3>I-4 Ultimate PPP</h3>
            </div>
          </div>
          <div tabindex="0" class="exp-box-cont">
            <div class="exp-box three">
              <h3>I-15 CORE Design-Build</h3>
            </div>
          </div>
          <div tabindex="0" tabindex="0" class="exp-box-cont">
            <div class="exp-box four">
              <h3>Elizabeth River Tunnels PPP</h3>
            </div>
          </div>
          <div tabindex="0" class="exp-box-cont">
            <div class="exp-box five">
              <h3>US-36 Managed Lanes (Phase 2)</h3>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

};

export default Team;
