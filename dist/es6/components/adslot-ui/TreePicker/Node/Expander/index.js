'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import GridCell from 'alexandria/Grid/Cell';
import Spinner from 'alexandria/Spinner';

var TreePickerNodeExpander = function TreePickerNodeExpander(_ref) {
  var isLoading = _ref.isLoading,
      onClick = _ref.onClick;

  var props = {
    dts: 'expander'
  };

  if (!isLoading) props.onClick = onClick;

  return React.createElement(
    GridCell,
    props,
    isLoading ? React.createElement(Spinner, { size: 'small' }) : React.createElement('div', { className: 'treepickernode-component-expander' })
  );
};

TreePickerNodeExpander.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

TreePickerNodeExpander.defaultProps = {
  isLoading: false
};

export default TreePickerNodeExpander;