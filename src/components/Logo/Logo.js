import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
  return (
    <div id="logo" className="logo">
      <a href={props.href}> 
        <img src={props.img} alt='logo'/>
      </a>
    </div>
  );
}

Logo.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string
};

export default Logo;