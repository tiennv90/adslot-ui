'use strict';

import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import FlexibleSpacer from 'alexandria/FlexibleSpacer';
import './styles.scss';

var baseClass = 'pagetitle-component';

var PageTitle = function PageTitle(_ref) {
  var children = _ref.children,
      isFooter = _ref.isFooter,
      title = _ref.title;

  var className = isFooter ? baseClass + ' ' + baseClass + '-is-footer' : baseClass;
  return React.createElement(
    'div',
    { className: className, id: _.kebabCase(title) },
    children ? React.createElement(
      'span',
      { className: 'flexible-wrapper-inline' },
      title,
      React.createElement(FlexibleSpacer, null),
      children
    ) : title
  );
};

PageTitle.displayName = 'AlexandriaPageTitleComponent';

PageTitle.propTypes = {
  children: PropTypes.node,
  isFooter: PropTypes.bool,
  title: PropTypes.node
};
PageTitle.defaultProps = {
  isFooter: false
};

export default PageTitle;