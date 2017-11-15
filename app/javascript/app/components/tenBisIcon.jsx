import React from 'react';
import PropTypes from 'prop-types';

const TenBisIcon = ({isTenBis}) => (
  (isTenBis === null || !isTenBis) ? null : <div className="ten-bis-icon"></div>
);

TenBisIcon.propTypes = {
  isTenBis: PropTypes.bool,
};

export default TenBisIcon;
