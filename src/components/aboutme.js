import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="aboutBackground" style={{ width: "100%", margin: "auto", paddingTop: "1rem" }}>
        <div className="container">
        <Grid className="demo-grid-2">
          <Cell
          className="navbar-color1"
            style={{
              padding: "5%",
              margin: "5%",
              fontSize: "18px",
            }}
            col={4}
          >
            <h3>My World</h3>
            I am a father of 2 precious young girls who are my absolute world and a husband of a beautiful ambitious spouse. I am always trying to find ways to keep excitement within our household because to me happiness is a key component for being healthy. I enjoy spending time with my family doing many different things from learning to camping. 
          </Cell>

          <Cell
          className="navbar-color1"
            style={{
              padding: "5%",
              margin: "5%",
              fontSize: "18px",
            }}
            col={4}
          >
            <h3>Things I Like</h3>
            I enjoy doing many different things and most of them I do with my family. We are always trying to mix it up and keep life interesting. Some of my hobbies and things I like to do include going camping, playing golf, exercising, hiking, grilling and shooting off model rockets. I also enjoy checking out what the newest technologies are on the market and finding out how they work sparks my interests. 
          </Cell>

          <Cell
          className="navbar-color1"
            style={{
              padding: "5%",
              margin: "5%",
              fontSize: "18px",
            }}
            col={4}
          >
            <h3>My Passion</h3>
            I get enjoyment from helping people. Weather it be doing a good deed or solving a complex problen for a client, Knowing that I can put a smile on someones face gives me joy. I get a sense of accomplishment knowing I have had a positive impact in someones day. I also like to create new things and so for me having the ability to create something like responsive web pages drives me. Knowing that I can be creative designing something of my own and satisfy a clients needs at the same time is a passion of mine. I hold great pride in doing so. 
          </Cell>
        </Grid>
      </div>
      </div>
    );
  }
}

export default About;
