'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Arc from 'alexandria/Slicey/Arc';
import Donut from 'alexandria/Slicey/Donut';
import Marker from 'alexandria/Slicey/Marker';
import { ROUND, HALF, QUARTER, getPointX, getPointY } from './dataProcessor';
import './styles.scss';

var filterDataset = function filterDataset(dataset) {
  return _.filter(dataset, function (_ref) {
    var value = _ref.value;
    return value > 0;
  });
};

var getArcs = function getArcs(datasetForArcs) {
  var total = _.sumBy(datasetForArcs, 'value');

  var arcs = new Array(datasetForArcs.length);
  var endAngle = -QUARTER;
  var startAngle = 0;

  return _.map(arcs, function (undefinedArc, index) {
    var datum = datasetForArcs[index];
    var angle = ROUND * datum.value / total;
    startAngle = endAngle;
    endAngle += angle;
    return {
      label: datum.label,
      id: index,
      largeArcFlag: angle > HALF ? 1 : 0,
      x1: getPointX(startAngle),
      y1: getPointY(startAngle),
      x2: getPointX(endAngle),
      y2: getPointY(endAngle)
    };
  });
};

// IE Can't draw a complete circle as an arc, so swap it to a circle element.
var getArcElements = function getArcElements(filteredDataset) {
  if (filteredDataset.length > 1) {
    return _.map(getArcs(filteredDataset), function (arc) {
      return React.createElement(Arc, { key: arc.id, data: arc });
    });
  }

  return React.createElement('circle', { className: 'arc-component ' + _.kebabCase(filteredDataset[0].label), r: '.5', cx: '0', cy: '0' });
};

var getSvgProps = function getSvgProps(diameter) {
  return {
    className: 'slicey-component',
    height: diameter,
    width: diameter,
    viewBox: '-0.5 -0.5 1 1'
  };
};

var Slicey = function Slicey(_ref2) {
  var dataset = _ref2.dataset,
      diameter = _ref2.diameter,
      donut = _ref2.donut,
      marker = _ref2.marker;

  var filteredDataset = filterDataset(dataset);

  var donutEl = donut ? React.createElement(Donut, null) : null;

  var markerEl = marker ? React.createElement(Marker, { fraction: marker }) : null;

  if (_.isEmpty(filteredDataset)) {
    return React.createElement(
      'svg',
      getSvgProps(diameter),
      React.createElement('circle', { className: 'slicey-empty', r: '.5', cx: '0', cy: '0' }),
      markerEl,
      donutEl
    );
  }

  return React.createElement(
    'svg',
    getSvgProps(diameter),
    React.createElement('circle', { className: 'slicey-background', r: '.49', cx: '0', cy: '0' }),
    getArcElements(filteredDataset),
    markerEl,
    donutEl
  );
};

Slicey.displayName = 'AlexandriaSliceyComponent';

Slicey.propTypes = {
  dataset: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })),
  diameter: PropTypes.number,
  donut: PropTypes.bool,
  marker: PropTypes.number
};

Slicey.defaultProps = {
  diameter: 100
};

export default Slicey;