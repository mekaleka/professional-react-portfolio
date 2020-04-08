import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardActions, Button, CardMenu, IconButton, CardText } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "175px", background: "url(https://user-images.githubusercontent.com/58678985/78611016-e124f580-781a-11ea-9bfc-ac34cb6b063f.png) center / cover"}}>React Project #1</CardTitle>
            <CardText>
            The React Employee Directory app allows for business professionals to access non-sensitive employee data.
            </CardText>
            <CardActions border>
              <Button colored>GITHUB</Button>
              <Button colored>DEMO</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
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

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;
