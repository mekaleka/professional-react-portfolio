import React, { Component } from "react";
import { Grid, Cell } from "react-mdl"

class Landing extends Component {
  render() {
    return (
      <div style={{width: "100%", margin: "auto"}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
              src="https://avatars3.githubusercontent.com/u/58678985?s=460&u=aa7e88c92eff7ce64d65228342241a9ccc5f07be&v=4"
              alt="profilepic"
              className="profile-image"
              />
              <div className="title-text">
                <h1>Junior Full Stack Web Developer</h1>

                <hr/>

                <p>HTML/CSS | Bootstrap |JavaScript | jQuery | Node.js | React | Express | MongoDB | MySQL</p>
              </div>
            </Cell>
          </Grid>
      </div>
    );
  }
}

export default Landing;
