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
              Junior Web Developer and customer-oriented management professional with strong people skills. Focused on providing exceptional customer satisfaction while maintaining high level productivity. I recently obtained a Full Stack Web Development Certificate from University of Arizona with skills in HTML, CSS, JavaScript, jQuery. Worked with a team of four to develop "Check It," an app for checking multiple social media accounts. Responsible for implementing Auth0 to ensure user security with Google and other platforms. Maintaining dependability and producing at a high level motivates me. Also, having passion and a sense of accomplishment drives me to continue to do well and advance within a company. I am excited to leverage my technical skills and customer-focused mindset to build intuitive, user-friendly web experiences. 
              </p>
            </Cell>

            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />

              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "25px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-phone-square" aria-hidden="true" />
                      (602) 758-9163
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "25px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      michaeljamesplichta@gmail.com
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "25px", fontFamily: "Anton"}}
                    >
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                      <a
                        href="https://www.linkedin.com/in/michael-plichta-60a391199/"
                        rel="noopener noreferrer"
                        target="_blank">
                        Michael Plichta | LinkedIn.com
                        </a>
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
