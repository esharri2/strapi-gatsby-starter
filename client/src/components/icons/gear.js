import React from "react";

import Gear from "../../images/icons/gear.svg";
import Icon from "../icon";

const GearIcon = props => {
  return (
    <Icon color={props.color} className={props.className}>
      <Gear />
    </Icon>
  );
};

export default GearIcon;
