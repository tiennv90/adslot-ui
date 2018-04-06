'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import SvgSymbol from 'alexandria/SvgSymbol';

require('./styles.scss');

var SearchBarComponent = function SearchBarComponent(_ref) {
  var additionalClassNames = _ref.additionalClassNames,
      searchString = _ref.searchString,
      searchPlaceholder = _ref.searchPlaceholder,
      searchIconHref = _ref.searchIconHref,
      onSearchStringChange = _ref.onSearchStringChange,
      onSearch = _ref.onSearch,
      dts = _ref.dts;

  var className = ['search-bar-component'].concat(additionalClassNames).join(' ');
  var placeholder = searchPlaceholder || 'Search';
  var onSearchStringChangeBound = function onSearchStringChangeBound(event) {
    return onSearchStringChange(event.target.value);
  };
  var onTextInputKeyPress = function onTextInputKeyPress(event) {
    var ENTER_KEY = 13;

    // event.keyCode always returns 0 on Chrome (a known bug), so we must do a check
    // for event.which as well. For more info on the bug, see this SO entry:
    // http://stackoverflow.com/questions/1897333/firing-a-keyboard-event-on-chrome
    if (event.which === ENTER_KEY || event.keyCode === ENTER_KEY) {
      onSearch();
    }
  };

  return React.createElement(
    'div',
    { className: className, 'data-test-selector': dts },
    React.createElement('input', {
      className: 'search-bar-component-text-input form-control',
      onChange: onSearchStringChangeBound,
      onKeyPress: onTextInputKeyPress,
      placeholder: placeholder,
      type: 'text',
      value: searchString
    }),
    React.createElement(
      Button,
      { className: 'search-bar-component-button btn-inverse', bsStyle: 'primary', onClick: onSearch },
      React.createElement(SvgSymbol, { classSuffixes: ['search-icon'], href: searchIconHref })
    )
  );
};

SearchBarComponent.propTypes = {
  additionalClassNames: PropTypes.arrayOf(PropTypes.string),
  searchString: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string,
  searchIconHref: PropTypes.string.isRequired,
  onSearchStringChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  dts: PropTypes.string
};

SearchBarComponent.defaultProps = {
  additionalClassNames: []
};

export default SearchBarComponent;