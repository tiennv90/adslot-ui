'use strict';

/* eslint-disable jsx-a11y/anchor-is-valid */
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import idPropType from '../../prop-types/idPropType';
import './styles.scss';

var TileGrid = function TileGrid(_ref) {
  var title = _ref.title,
      items = _ref.items,
      onItemClick = _ref.onItemClick;

  var baseClass = 'tile-grid-component';

  return React.createElement(
    'div',
    { className: baseClass },
    React.createElement(
      'strong',
      { className: baseClass + '-title' },
      title
    ),
    React.createElement(
      'ul',
      { className: baseClass + '-list' },
      _.map(items, function (item) {
        return React.createElement(
          'li',
          { key: item.id, className: baseClass + '-item ' + baseClass + '-item-' + item.classSuffix },
          React.createElement(
            'a',
            { className: baseClass + '-item-link', onClick: function onClick() {
                return onItemClick(item.id);
              } },
            item.title
          )
        );
      })
    )
  );
};

TileGrid.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: idPropType.isRequired,
    classSuffix: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  onItemClick: PropTypes.func.isRequired
};

TileGrid.displayName = 'AlexandriaTileGridComponent';

export default TileGrid;