'use strict';

import immutable from 'seamless-immutable';
import _ from 'lodash';

var panel1 = {
  id: '1',
  title: 'Panel 1',
  onClick: _.noop
};

var panel2 = {
  id: '2',
  icon: { href: '/assets/svg-symbols.svg#list' },
  title: 'Panel 2',
  isCollapsed: true,
  onClick: _.noop,
  content: 'Panel 2 content',
  dts: 'panel-two'
};

var panel3 = {
  id: '3',
  title: 'Panel 3',
  isCollapsed: true
};

var PanelMocks = immutable({
  panel1: panel1,
  panel2: panel2,
  panel3: panel3
});

export default PanelMocks;