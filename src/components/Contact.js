import React, { Component } from "react"
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import ToggleDisplay from 'react-toggle-display';

import Navigation from "./Navigation";

import Fun from './Fun';

import ContactForm from './ContactForm'


class Contact extends React.Component {

  render() {
    return (
      <div>
        <header class="team">
          <div class="blackout">
            <Navigation />
          </div>
        </header>

        <main>
          <h1 class="contact-head">Contact Information</h1>
          <div class="contacts-cont">
            <div class="contacts-left">
              <h2>About Us</h2>
              <p>We build for a better society. From hospitals to stadiums, airports to corporate headquarters, and power plants to tunnels and bridges, the important buildings and infrastructure we create help heal, transport, entertain and energize communities.</p>

              <h2 class="contacts-skanska">Skanska</h2>
                <ul>
                  <li>221 Yale Ave N</li>
                  <li>Seattle, 98109, WA</li>
                  <li>Telephone: <a href="tel:+1-206-726-8000">+1.206.726.8000</a></li>
                  <li>FAX: <a href="tel:+1-800-xxx-xxxx">+1 800 XXX</a></li>
                  <li>E-mail: <a href="mailto:info@xxx.com">info@XXX</a></li>
                </ul>
            </div>

            <div class="contacts-right">

            <ContactForm />

            </div>

          </div>
        </main>

      </div>
    );
  };
};

export default Contact;
