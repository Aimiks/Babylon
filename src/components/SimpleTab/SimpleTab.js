import React from 'react';
import PropTypes from 'prop-types';
import './SimpleTab.scss';

const SimpleTab = (props) => {
  return (
    <a className="simpleTab" href={props.target}>{props.name}</a>
  );
}
SimpleTab.propTypes = {
  target: PropTypes.string,
  name: PropTypes.string
}
export default SimpleTab;