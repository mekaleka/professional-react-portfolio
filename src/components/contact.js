import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Michael Plichta</h2>
              <img
                src="https://avatars3.githubusercontent.com/u/58678985?s=460&u=aa7e88c92eff7ce64d65228342241a9ccc5f07be&v=4"
                alt="profilepic"
                className="profile-image"
                style={{ height: "25" }}
              />
              <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                Web Developer and customer-oriented management professional with
                strong people skills. Strong focus on customer satisfaction
                while maintaining productivity. I recently obtained a Full Stack
                Web Development Certificate from the University of Arizona with
                skills in HTML, CSS, JavaScript, jQuery
              </p>
            </Cell>

            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />

              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "25px", fontFamily: "Anton" }}>
                      <i className="fa fa-phone-square" aria-hidden="true" />
                      (602) 758-9163
                    </ListItemContent>
                  </ListItem>
                 
                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "25px", fontFamily: "Anton" }}>
                      <i className="fa fa-envelope" aria-hidden="true" />
                      michaeljamesplichta@gmail.com
                    </ListItemContent>
                  </ListItem>
                  
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
