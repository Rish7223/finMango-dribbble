import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return <div className="min-h-screen bg-gray-200">{children}</div>;
};

AppLayout.propTypes = {
  children: PropTypes.any
};

export default AppLayout;
