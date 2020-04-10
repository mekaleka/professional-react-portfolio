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
            <h3>What is Lorem Ipsum?</h3>
            simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more.
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
            <h3>What is Lorem Ipsum?</h3>
            simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged
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
            <h3>What is Lorem Ipsum?</h3>
            simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </Cell>
        </Grid>
      </div>
      </div>
    );
  }
}

export default About;
