import React, { useState, useRef } from "react";
import styled from "styled-components";

import Button from "./button";
import Close from "./icons/close";
import Menu from "./icons/menu";
import Link from "./link";
import List from "./list";
import ListItem from "./list-item";

import {
  border,
  breakpoints,
  colors,
  dimensions,
  spacing,
} from "../utils/styles";

const togglePoint = breakpoints.md;

const NavTag = styled.nav`
  font-size: 1.1rem;
  color: ${colors.malibu};
`;

const NavTagExpanded = styled(NavTag)`
  display: block;
  @media screen and (max-width: ${togglePoint}) {
    /* Keeps nav tag from factoring into the "space-between" calc
    and making close icon sit in the middle of the header */
    position: fixed;
  }
`;

const NavTagClosed = styled(NavTag)`
  display: none;
  @media screen and (min-width: ${togglePoint}) {
    display: block;
  }
`;

const NavList = styled(List)`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    padding: 0 ${spacing.sm};
    &:last-of-type {
      padding-right: 0;
    }
  }
  @media screen and (max-width: ${togglePoint}) {
    position: fixed;
    top: ${dimensions.headerHeight};
    bottom: 0;
    right: 0;
    left: 0;
    flex-direction: column;
    li {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.licorice};
      width: 100%;
      &:first-child {
        border-top: ${border.size} ${border.style} ${colors.malibu};
      }
      &:not(:last-child) {
        border-bottom: ${border.size} ${border.style} ${colors.malibu};
      }
      > a {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const NavToggle = styled(Button)`
  @media screen and (min-width: ${togglePoint}) {
    display: none;
  }
`;

const Nav = props => {
  const [expanded, setExpanded] = useState(false);

  const toggleRef = useRef(null);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      console.log(toggleRef.current);
      toggleRef.current.focus();
    }
  };

  const LinkList = (
    <NavList>
      <ListItem>
        <Link to="/">Accusamus</Link>
      </ListItem>
      <ListItem>
        <Link to="/">Debitis</Link>
      </ListItem>
      <ListItem>
        <Link to="/">Odio</Link>
      </ListItem>
      <ListItem>
        <Link to="/">Sapiente</Link>
      </ListItem>
    </NavList>
  );

  const navTagAttributes = {
    id: "mobile-nav-menu",
    "aria-labelledby": "mobile-nav-toggle",
    onBlur: handleBlur,
  };

  return (
    <>
      <NavToggle
        aria-label={expanded ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={expanded}
        aria-popup={true}
        aria-controls="mobile-nav-menu"
        id="mobile-nav-toggle"
        ref={toggleRef}
        onClick={handleClick}
      >
        {expanded ? <Close /> : <Menu />}
      </NavToggle>
      {expanded ? (
        <NavTagExpanded {...navTagAttributes} class={props.className}>
          {LinkList}
        </NavTagExpanded>
      ) : (
        <NavTagClosed {...navTagAttributes} class={props.className}>
          {LinkList}
        </NavTagClosed>
      )}
    </>
  );
};

export default Nav;
