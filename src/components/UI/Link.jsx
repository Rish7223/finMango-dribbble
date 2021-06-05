import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, children }) => {
  return (
    <a className="text-[#B2ABB3] text-base font-medium capitalize" href={href}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any
};

export default Link;
