import React from 'react';
import PropTypes from 'prop-types';

const OutlinedButton = ({ children }) => {
  return (
    <button className="px-8 py-3 bg-transparent text-white text-sm font-bold border-2 border-white">
      {children}
    </button>
  );
};

OutlinedButton.propTypes = {
  children: PropTypes.any
};
export default OutlinedButton;
