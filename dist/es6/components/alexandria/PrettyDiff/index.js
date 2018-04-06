'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import DiffMatchPatch from 'diff-match-patch';
import './styles.scss';

var PrettyDiff = function PrettyDiff(_ref) {
  var newText = _ref.newText,
      oldText = _ref.oldText;

  var dmp = new DiffMatchPatch();
  var diffs = dmp.diff_main(oldText, newText);

  var getTextClass = function getTextClass(diffType) {
    switch (diffType) {
      case DiffMatchPatch.DIFF_DELETE:
        return 'pretty-diff-component-delete';
      case DiffMatchPatch.DIFF_INSERT:
        return 'pretty-diff-component-insert';
      default:
        return 'pretty-diff-component-equal';
    }
  };

  return React.createElement(
    'div',
    { className: 'pretty-diff-component' },
    _.map(diffs, function (diff, index) {
      return React.createElement(
        'span',
        { key: index, className: getTextClass(diff[0]) },
        diff[1]
      );
    })
  );
};

PrettyDiff.displayName = 'PrettyDiffComponent';

PrettyDiff.propTypes = {
  newText: PropTypes.string,
  oldText: PropTypes.string
};
PrettyDiff.defaultProps = {
  newText: '',
  oldText: ''
};

export default PrettyDiff;