'use strict';

/* eslint-disable react/no-array-index-key */
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'alexandria/Grid';
import GridCell from 'alexandria/Grid/Cell';
import GridRow from 'alexandria/Grid/Row';

var Totals = function Totals(_ref) {
  var toSum = _ref.toSum,
      valueFormatter = _ref.valueFormatter;
  return React.createElement(
    Grid,
    null,
    _(toSum).reject({ isHidden: true }).map(function (item, index) {
      return React.createElement(
        GridRow,
        { short: true, horizontalBorder: false, key: index },
        React.createElement(
          GridCell,
          { stretch: true },
          item.label
        ),
        React.createElement(
          GridCell,
          { dts: _.kebabCase(item.label) + '-value' },
          valueFormatter(item.value)
        )
      );
    }).value(),
    React.createElement(
      GridRow,
      { short: true, horizontalBorder: false, type: 'footer' },
      React.createElement(
        GridCell,
        { stretch: true },
        'Total'
      ),
      React.createElement(
        GridCell,
        { dts: 'total-value' },
        valueFormatter(_.sumBy(toSum, 'value'))
      )
    )
  );
};

Totals.displayName = 'AlexandriaTotalsComponent';

Totals.propTypes = {
  toSum: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number.isRequired,
    isHidden: PropTypes.bool
  })),
  valueFormatter: PropTypes.func
};

Totals.defaultProps = {
  toSum: [],
  valueFormatter: function valueFormatter(value) {
    return '' + value;
  }
};

export default Totals;