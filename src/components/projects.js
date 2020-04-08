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
  IconButton,
  CardText,
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
                    "url(https://user-images.githubusercontent.com/58678985/78611016-e124f580-781a-11ea-9bfc-ac34cb6b063f.png) center / cover",
                }}
              ></CardTitle>
              <CardText>
                <h5>REACT EMPLOYEE DIRECTORY</h5>
                The React Employee Directory app allows for business
                professionals to access non-sensitive employee data.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/mekaleka/react-employee-directory"
                >
                  GITHUB
                </Button>
                <Button
                  colored
                  href="https://mekaleka.github.io/react-employee-directory/"
                >
                  DEPLOYED APP
                </Button>
              </CardActions>
              <CardMenu style={{ color: "blue" }}>
                <IconButton name="share" />
              </CardMenu>
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
                    "url(https://user-images.githubusercontent.com/58678985/77840739-9383fb00-713f-11ea-8f34-a3d3a43de4bc.png) center / cover",
                }}
              ></CardTitle>
              <CardText>
                <h5>WORKOUT TRACKER</h5>
                With this app the user will be able to create daily workouts
                based on their specific routine.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/mekaleka/workout-tracker"
                >
                  GITHUB
                </Button>
                <Button
                  colored
                  href="https://fierce-gorge-19632.herokuapp.com/?id=5e7ebb930e39f800171bb065"
                >
                  HEROKU DEPLOYMENT
                </Button>
              </CardActions>
              <CardMenu style={{ color: "blue" }}>
                <IconButton name="share" />
              </CardMenu>
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
                    "url(https://user-images.githubusercontent.com/58678985/76912328-b88b8a80-6870-11ea-846e-6d9b995d07da.jpeg) center / cover",
                }}
              ></CardTitle>
              <CardText>
                <h5>COFFEE CLUB</h5>
                This application has a UI that will allow for coffee
                connoisseurs to be a part of a growing online community.
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/mekaleka/coffee-club">
                  GITHUB
                </Button>
                <Button
                  colored
                  href="https://fathomless-gorge-36996.herokuapp.com/"
                >
                  HEROKU DEPLOYMENT
                </Button>
              </CardActions>
              <CardMenu style={{ color: "blue" }}>
                <IconButton name="share" />
              </CardMenu>
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
                    "url(https://user-images.githubusercontent.com/58678985/75832961-d2a77200-5d74-11ea-927b-6f5bfea855ce.png) center / cover",
                }}
              ></CardTitle>
              <CardText>
                <h5>TEAM PROFILE GENERATOR</h5>
                This application is designed to allow the user to create a team
                list based on a list of employees.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/mekaleka/team-profile-generator"
                >
                  GITHUB
                </Button>
                <Button
                  colored
                  href="https://drive.google.com/file/d/1dSgKPxBtfiFD7rfWN_ya1g7YM1tByP3N/view"
                >
                  DEMO GIF
                </Button>
              </CardActions>
              <CardMenu style={{ color: "blue" }}>
                <IconButton name="share" />
              </CardMenu>
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
                <Button
                  colored
                  href="https://github.com/mekaleka/online-offline-budget-trackers"
                >
                  GITHUB
                </Button>
                <Button
                  colored
                  href="https://protected-plateau-99888.herokuapp.com/"
                >
                  HEROKU DEPLOYMENT
                </Button>
              </CardActions>
              <CardMenu style={{ color: "blue" }}>
                <IconButton name="share" />
              </CardMenu>
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
                <Button
                  colored
                  href="https://github.com/mekaleka/content-management-system"
                >
                  GITHUB
                </Button>
                <Button
                  colored
                  href="https://drive.google.com/file/d/1OxwdH0mNEa9hEg_7SAET_F3t0UreCYdz/view"
                >
                  DEMO GIF
                </Button>
              </CardActions>
              <CardMenu style={{ color: "blue" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is JavaScript</h1>
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
        <div>
          <h1>This is Express.js</h1>
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
