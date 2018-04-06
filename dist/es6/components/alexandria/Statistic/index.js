'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

var Statistic = function Statistic(_ref) {
  var label = _ref.label,
      value = _ref.value,
      inline = _ref.inline;

  var baseClass = 'statistic-component';
  var statisticClassNames = [baseClass];
  if (inline) statisticClassNames.push('inline');

  return React.createElement(
    'label',
    { className: statisticClassNames.join(' ') },
    React.createElement(
      'div',
      { className: baseClass + '-value' },
      value
    ),
    React.createElement(
      'div',
      { className: baseClass + '-label' },
      label
    )
  );
};

Statistic.displayName = 'AlexandriaStatisticComponent';

Statistic.propTypes = {
  inline: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

Statistic.defaultProps = {
  inline: false
};

export default Statistic;