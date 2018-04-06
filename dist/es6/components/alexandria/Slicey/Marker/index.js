'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { ROUND, QUARTER, getPointX, getPointY } from 'alexandria/Slicey/dataProcessor';
import './styles.scss';

var Marker = function Marker(_ref) {
  var fraction = _ref.fraction;

  var getMarkerPoints = function getMarkerPoints(markerValue) {
    var pointOnCircle = ROUND * markerValue - QUARTER;
    return getPointX(pointOnCircle) + ',' + getPointY(pointOnCircle) + ' 0,0';
  };

  return React.createElement('polyline', { className: 'marker-component', points: getMarkerPoints(fraction) });
};

Marker.displayName = 'AlexandriaSliceyMarkerComponent';

Marker.propTypes = {
  fraction: PropTypes.number
};
Marker.defaultProps = {
  fraction: 0
};

export default Marker;