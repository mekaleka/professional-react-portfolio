import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText,
  Navigation,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Grid>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                className="app-name"
                style={{
                  color: "blue",
                  height: "175px",
                  background:
                    "url(https://user-images.githubusercontent.com/58678985/82691717-32dedf00-9c13-11ea-87b0-743f86d8207a.png) center / cover",
                }}
              ></CardTitle>
              <CardText>
                <h5>REACT EMPLOYEE DIRECTORY</h5>
                The React Employee Directory app allows for business
                professionals to access non-sensitive employee data.
              </CardText>
              <CardActions border>
                <Navigation>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mekaleka/react-employee-directory"
                  >
                    <Button colored>GITHUB</Button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mekaleka.github.io/react-employee-directory/"
                  >
                    <Button colored>DEPLOYED APP</Button>
                  </a>
                </Navigation>
              </CardActions>
              <CardMenu style={{ color: "blue" }}></CardMenu>
            </Card>
          </Grid>

          <Grid>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                className="app-name"
                style={{
                  color: "blue",
                  height: "175px",
                  background:
                    "url(https://user-images.githubusercontent.com/58678985/82692270-4a6a9780-9c14-11ea-8748-55133276d57d.png) center / cover",
                }}
              ></CardTitle>
              <CardText>
                <h5>WORKOUT TRACKER</h5>
                With this app the user will be able to create daily workouts
                based on their specific routine.
              </CardText>
              <CardActions border>
                <Navigation>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mekaleka/workout-tracker"
                  >
                    <Button colored>GITHUB</Button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://fierce-gorge-19632.herokuapp.com/?id=5e7ebb930e39f800171bb065"
                  >
                    <Button colored>HEROKU DEPLOYMENT</Button>
                  </a>
                </Navigation>
              </CardActions>
              <CardMenu style={{ color: "blue" }}></CardMenu>
            </Card>
          </Grid>

          <Grid>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                className="app-name"
                style={{
                  color: "blue",
                  height: "175px",
                  background:
                    "url(https://user-images.githubusercontent.com/58678985/82692522-b4833c80-9c14-11ea-838e-22da03f69c47.png) center / cover",
                }}
              ></CardTitle>
              <CardText>
                <h5>TEAM PROFILE GENERATOR</h5>
                This application is designed to allow the user to create a team
                list based on a list of employees.
              </CardText>
              <CardActions border>
                <Navigation>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mekaleka/team-profile-generator"
                  >
                    <Button colored>GITHUB</Button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/1dSgKPxBtfiFD7rfWN_ya1g7YM1tByP3N/view"
                  >
                    <Button colored>DEMO GIF</Button>
                  </a>
                </Navigation>
              </CardActions>
              <CardMenu style={{ color: "blue" }}></CardMenu>
            </Card>
          </Grid>

          <Grid>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                className="app-name"
                style={{
                  color: "blue",
                  height: "175px",
                  background:
                    "url(https://user-images.githubusercontent.com/58678985/76372034-6b9c3700-62f9-11ea-9f46-4d644447e47b.png) center / cover",
                }}
              ></CardTitle>
              <CardText>
                <h5>CONTENT MANAGEMENT SYSTEM</h5>
                This is a Contact Management System that allows for the user to
                create and manage data for their employees and their roles.
              </CardText>
              <CardActions border>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mekaleka/content-management-system"
                >
                  <Button colored>GITHUB</Button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1OxwdH0mNEa9hEg_7SAET_F3t0UreCYdz/view"
                >
                  <Button colored>DEMO GIF</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "blue" }}></CardMenu>
            </Card>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Grid>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                className="app-name"
                style={{
                  color: "blue",
                  height: "175px",
                  background:
                    "url(https://user-images.githubusercontent.com/58678985/77864302-984abc80-71dc-11ea-88d5-1c32fb241733.png) center / cover",
                }}
              ></CardTitle>
              <CardText>
                <h5>ONLINE/OFFLINE BUDGET TRACKER</h5>
                Budget Tracker UI allows for the user to be able to track
                transactions to and from their account with or without internet
                connection.
              </CardText>
              <CardActions border>
                <Navigation>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mekaleka/online-offline-budget-trackers"
                  >
                    <Button colored>GITHUB</Button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://protected-plateau-99888.herokuapp.com/"
                  >
                    <Button colored>HEROKU DEPLOYMENT</Button>
                  </a>
                </Navigation>
              </CardActions>
              <CardMenu style={{ color: "blue" }}></CardMenu>
            </Card>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is jQuery</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div className="projects-grid">
          <Grid>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                className="app-name"
                style={{
                  color: "blue",
                  height: "175px",
                  background:
                    "url(https://user-images.githubusercontent.com/58678985/76912328-b88b8a80-6870-11ea-846e-6d9b995d07da.jpeg) center / cover",
                }}
              ></CardTitle>
              <CardText>
                <h5>COFFEE CLUB</h5>
                This application has a UI that will allow for coffee
                connoisseurs to be a part of a growing online community.
              </CardText>
              <CardActions border>
                <Navigation>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mekaleka/coffee-club"
                  >
                    <Button colored>GITHUB</Button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://fathomless-gorge-36996.herokuapp.com/"
                  >
                    <Button colored>HEROKU DEPLOYMENT</Button>
                  </a>
                </Navigation>
              </CardActions>
              <CardMenu style={{ color: "blue" }}></CardMenu>
            </Card>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div>
          <h1>This is MySQL</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
          <Tab>JavaSript</Tab>
          <Tab>jQuery</Tab>
          <Tab>Express.js</Tab>
          <Tab>MySQL</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
