'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SvgSymbol, Spinner } from 'alexandria';
import './styles.scss';

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.debounceOnSearch = _.debounce(props.onSearch, props.debounceInterval);

    _this.onChange = _this.onChange.bind(_this);
    _this.onClear = _this.onClear.bind(_this);
    _this.onKeyPress = _this.onKeyPress.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'onChange',
    value: function onChange(event) {
      var _props = this.props,
          disabled = _props.disabled,
          searchOnChange = _props.searchOnChange,
          onChange = _props.onChange;

      if (disabled) return;

      var value = _.get(event, 'target.value');
      onChange(value);
      if (searchOnChange) this.debounceOnSearch(value);
    }
  }, {
    key: 'onKeyPress',
    value: function onKeyPress(event) {
      var _props2 = this.props,
          disabled = _props2.disabled,
          searchOnEnterKey = _props2.searchOnEnterKey,
          onSearch = _props2.onSearch;

      if (disabled) return;

      if (searchOnEnterKey && event.which === 13) {
        var value = _.get(event, 'target.value');
        onSearch(value);
      }
    }
  }, {
    key: 'onClear',
    value: function onClear() {
      var _props3 = this.props,
          disabled = _props3.disabled,
          onChange = _props3.onChange,
          onClear = _props3.onClear,
          onSearch = _props3.onSearch,
          searchOnChange = _props3.searchOnChange;

      if (disabled) return;

      var value = '';

      onChange(value);
      if (searchOnChange) {
        onSearch(value);
      }
      onClear(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          disabled = _props4.disabled,
          isLoading = _props4.isLoading,
          placeholder = _props4.placeholder,
          svgSymbolCancel = _props4.svgSymbolCancel,
          svgSymbolSearch = _props4.svgSymbolSearch,
          value = _props4.value;

      var searchClassSuffixes = disabled ? ['color-disabled'] : svgSymbolSearch.classSuffixes;
      var cancelClassSuffixes = disabled ? ['color-disabled'] : svgSymbolCancel.classSuffixes;

      return React.createElement(
        'div',
        { className: 'search-component' },
        React.createElement('input', {
          autoComplete: 'off',
          className: 'search-component-input',
          disabled: disabled,
          name: 'search',
          onChange: this.onChange,
          onKeyPress: this.onKeyPress,
          placeholder: 'Search ' + placeholder,
          type: 'search',
          value: value
        }),
        isLoading ? React.createElement(Spinner, { size: 'small' }) : null,
        _.isEmpty(value) ? React.createElement(SvgSymbol, { href: svgSymbolSearch.href, classSuffixes: searchClassSuffixes }) : React.createElement(SvgSymbol, { href: svgSymbolCancel.href, classSuffixes: cancelClassSuffixes, onClick: this.onClear })
      );
    }
  }]);

  return Search;
}(Component);

Search.displayName = 'AdslotUiSearchComponent';

Search.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  svgSymbolCancel: PropTypes.shape(SvgSymbol.propTypes),
  svgSymbolSearch: PropTypes.shape(SvgSymbol.propTypes),
  value: PropTypes.string,
  searchOnChange: PropTypes.bool,
  searchOnEnterKey: PropTypes.bool,
  debounceInterval: PropTypes.number
};

Search.defaultProps = {
  disabled: false,
  isLoading: false,
  onChange: _.noop,
  onClear: _.noop,
  onSearch: _.noop,
  placeholder: '',
  svgSymbolCancel: {
    classSuffixes: ['gray-darker'],
    href: '/assets/svg-symbols.svg#cancel'
  },
  svgSymbolSearch: {
    classSuffixes: ['gray-light'],
    href: '/assets/svg-symbols.svg#search'
  },
  value: '',
  searchOnChange: true,
  searchOnEnterKey: false,
  debounceInterval: 0
};

export default Search;