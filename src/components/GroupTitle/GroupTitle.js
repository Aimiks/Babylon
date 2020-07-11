import React from 'react';
import PropTypes from 'prop-types';

const GroupTitle = function (props) {
  return (<h1 className="groupTitle">{props.title}</h1>);
}

GroupTitle.propTypes = {
  title: PropTypes.string
}

export default GroupTitle;