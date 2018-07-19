import React from "react"
import { NavLink } from "react-router-dom"


const Navigation = () => {
  return (
    <div>
      <div class="navit static-nav">
        <a href="/"><img class="showimg" src="/images/SKANSKA-orig-logo-white-1024x350.png" /></a>
        <a href="/"><img class="scrollimg" src="/images/SKANSKA-orig-logo-RBG-1024x119.png" /></a>

        <ul>
          <li><NavLink class="navlink" to="/">Home</NavLink></li>
          <li><NavLink class="navlink" to="/the-project">The Project</NavLink></li>
          <li><NavLink class="navlink" to="/the-team">The Team</NavLink></li>
          <li><NavLink class="navlink" to="/opportunities">Opportunities</NavLink></li>
          <li><NavLink class="navlink" to="/contact">Contact</NavLink></li>
        </ul>
      </div>

    </div>
  );
};

export default Navigation;
