'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'adslot-ui/Panel';
import Card from 'alexandria/Card';

var AccordionComponent = function AccordionComponent(_ref) {
  var dts = _ref.dts,
      panels = _ref.panels,
      onPanelClick = _ref.onPanelClick;
  return React.createElement(
    Card.Container,
    null,
    React.createElement(
      Card.Content,
      { fill: true },
      _.map(panels, function (panel) {
        var panelDts = dts ? 'panel-' + panel.id : undefined;

        return React.createElement(
          Panel,
          {
            key: panel.id,
            id: panel.id,
            icon: panel.icon,
            title: panel.title,
            isCollapsed: panel.isCollapsed,
            onClick: onPanelClick,
            dts: panelDts
          },
          panel.content
        );
      })
    )
  );
};

var accordionPanelPropTypes = _.pick(Panel.propTypes, ['id', 'icon', 'title', 'isCollapsed']);

accordionPanelPropTypes.content = PropTypes.node;

AccordionComponent.propTypes = {
  dts: PropTypes.string,
  panels: PropTypes.arrayOf(PropTypes.shape(accordionPanelPropTypes)).isRequired,
  onPanelClick: PropTypes.func.isRequired
};

export default AccordionComponent;