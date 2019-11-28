import React from "react";

import Footer from "./footer.js";
import Header from "./header.js";
import Main from "./main.js";

const Layout = props => (
  <>
    {props.hideHeader ? null : <Header />}
    <Main mobileSized={props.mobileSized}>{props.children}</Main>
    {props.hideFooter ? null : <Footer />}
  </>
);

export default Layout;
