import React from "react";

import BackToTop from "./back-to-top.js";
import Footer from "./footer.js";
import Header from "./header.js";
import Main from "./main.js";

const Layout = props => (
  <>
    {props.hideHeader ? null : <Header />}
    <Main hasFixedHeader={true} mobileSized={props.mobileSized}>
      {props.children}
    </Main>
    {props.hideFooter ? null : <Footer />}
    <BackToTop />
  </>
);

export default Layout;
