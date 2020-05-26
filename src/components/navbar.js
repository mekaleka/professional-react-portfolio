import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Landingpage from "./landingpage";

function Navbar() {
  return (
    <div className="demo-big-content">
      <Header className="navbar-color" title="Michael J Plichta" scroll>
        <Navigation>
          <Link to="/professional-react-portfolio">Home Page</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Header>
      <Drawer title="Title">
        <Navigation>
          <Link to="/professional-react-portfolio">Home Page</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Drawer>
    </div>
  );
}

export default Navbar;
