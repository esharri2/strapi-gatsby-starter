import React from "react";

import MenuIcon from "../../images/icons/menu.svg";
import Icon from "../icon";

const Menu = props => {
  return (
    <Icon {...props}>
      <MenuIcon />
    </Icon>
  );
};

export default Menu;
