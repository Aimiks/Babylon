import React from 'react';
import Logo from '../Logo/Logo';
import SimpleTab from '../SimpleTab/SimpleTab';
import TabsContainer from '../TabsContainer/TabsContainer';
import PropTypes from 'prop-types';
import './TopHeader.scss';

const TopHeader = (props) => {
  const tabs = [];
  props.tabs.forEach(tab => {
    const tabName = tab.name;
    let tabToPush;
    if(tab.type === 1) {
      tabToPush = (<SimpleTab key={tab.name} target={tab.link} name={tabName}/>);
    } else {
      // complex tab {NYI}
    }
    tabs.push(tabToPush);
  });
  return (
    <div id="topHeader" className="topHeader">
      <Logo img={props.logo.img} redir={props.logo.link}/>
      <TabsContainer tabs={tabs} />
    </div>
  );
}

TopHeader.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      target: PropTypes.string,
      link: PropTypes.string})),
  logo: PropTypes.shape({
    img: PropTypes.string,
    link: PropTypes.string
  })
};

export default TopHeader;