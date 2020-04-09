import React from "react";
import { Layout, Footer, Navigation, Drawer, Content } from "react-mdl";

class FooterBar extends React.Component {
  render() {
    return (
      <Layout>
        <Footer
          className="navbar-color"
          title="Michael J Plichta"
          scroll
        ></Footer>
      </Layout>
    );
  }
}

export default FooterBar;
