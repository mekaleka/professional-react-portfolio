import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content, Footer } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
// import FooterBar from "./components/footer";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Navbar />
        {/* <Content> */}
          <div className="page-content">
            <Main />
          </div>
          {/* <Footer className="navbar-color footer-index" title="Michael J Plichta"></Footer> */}
        {/* </Content> */}
        {/* <div className="footer-index"> */}
        {/* <FooterBar>This is a Footer</FooterBar> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
