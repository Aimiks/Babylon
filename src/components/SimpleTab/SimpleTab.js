import React from "react";
import PropTypes from "prop-types";
import "./SimpleTab.scss";
import { NavLink } from "react-router-dom";
const SimpleTab = (props) => {
  return (
    <NavLink
      className="simpleTab"
      activeClassName="active"
      to={`${props.target}`}
    >
      {props.name}
    </NavLink>
  );
};
SimpleTab.propTypes = {
  target: PropTypes.string,
  name: PropTypes.string,
};
export default SimpleTab;
