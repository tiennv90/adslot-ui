'use strict';

import PropTypes from 'prop-types';
import SvgSymbol from 'alexandria/SvgSymbol';
import idPropType from './idPropType';

var baseNodeProps = {
  id: idPropType.isRequired,
  label: PropTypes.string.isRequired
};

var mergeNodeProps = function mergeNodeProps(addedProps) {
  return Object.assign({}, baseNodeProps, addedProps);
};

export default {
  node: PropTypes.shape(mergeNodeProps({
    isExpandable: PropTypes.bool,
    path: PropTypes.arrayOf(PropTypes.shape(baseNodeProps).isRequired),
    ancestors: PropTypes.arrayOf(PropTypes.shape(baseNodeProps).isRequired),
    type: PropTypes.string.isRequired,
    value: PropTypes.number
  })),
  breadCrumbNode: PropTypes.shape(baseNodeProps),
  rootType: PropTypes.shape(mergeNodeProps({
    emptySvgSymbol: PropTypes.shape(SvgSymbol.propTypes),
    svgSymbol: PropTypes.shape(SvgSymbol.propTypes),
    hidden: PropTypes.bool,
    isRequired: PropTypes.bool.isRequired
  }))
};