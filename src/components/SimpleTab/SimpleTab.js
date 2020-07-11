import React from 'react';
import PropTypes from 'prop-types';

const SimpleTab = (props) => {
  return (
    <a className="simpleTab" href={props.target}>{props.title}</a>
  );
}
SimpleTab.propTypes = {
  target: PropTypes.string,
  title: PropTypes.string
}
export default SimpleTab;