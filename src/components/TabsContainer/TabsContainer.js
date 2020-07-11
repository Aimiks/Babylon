import React from 'react';
import PropTypes from 'prop-types';

const TabsContainer = (props) => {
  const {tabs} = props;
  return (
    <div className="tabsContainer">
      {tabs}
    </div>
  );
}

TabsContainer.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.SimpleTab)
}

export default TabsContainer;
