import React from 'react';
import PropTypes from 'prop-types';
import './TabsContainer.scss';

const TabsContainer = (props) => {
  const {tabs} = props;
  return (
    <div className="tabsContainer">
      {tabs}
    </div>
  );
}

TabsContainer.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.element)
}

export default TabsContainer;
