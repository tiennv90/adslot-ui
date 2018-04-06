'use strict';

import React from 'react';
import './styles.scss';

var Donut = function Donut() {
  return React.createElement('circle', { className: 'donut-component', r: '.45', cx: '0', cy: '0' });
};

Donut.displayName = 'AlexandriaSliceyDonutComponent';

export default Donut;