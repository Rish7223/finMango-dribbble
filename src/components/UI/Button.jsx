import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }) => {
  return (
    <button className="px-8 py-3 bg-[#FCCF08] text-[#251D27] text-sm font-bold">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any
};

export default Button;
