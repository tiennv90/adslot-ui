'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'react-bootstrap/lib/Button';

require('./styles.scss');

var baseClass = 'filepicker-component';

var FilePickerComponent = function (_React$Component) {
  _inherits(FilePickerComponent, _React$Component);

  function FilePickerComponent(props) {
    _classCallCheck(this, FilePickerComponent);

    var _this = _possibleConstructorReturn(this, (FilePickerComponent.__proto__ || Object.getPrototypeOf(FilePickerComponent)).call(this, props));

    _this.state = { isFileSelected: false, fileName: '' };

    _this.onChange = _this.onChange.bind(_this);
    _this.removeFile = _this.removeFile.bind(_this);
    return _this;
  }

  _createClass(FilePickerComponent, [{
    key: 'onChange',
    value: function onChange(changeEvent) {
      if (!this.state.isFileSelected) {
        this.setState({ isFileSelected: true, fileName: changeEvent.target.files[0].name });
        this.props.onSelect(changeEvent.target.files[0]);
      }
    }
  }, {
    key: 'removeFile',
    value: function removeFile() {
      if (this.state.isFileSelected) {
        this.fileInput.value = null;
        this.setState({ isFileSelected: false, fileName: '' });
        if (this.props.onRemove) {
          this.props.onRemove();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mainClass = classNames(_defineProperty({}, baseClass + '-highlight', this.props.isHighlighted), baseClass, 'input-group');
      var _state = this.state,
          isFileSelected = _state.isFileSelected,
          fileName = _state.fileName;


      return React.createElement(
        'div',
        { className: mainClass },
        React.createElement('input', {
          className: 'form-control',
          type: 'text',
          disabled: true,
          placeholder: this.props.placeholder,
          readOnly: 'readonly',
          value: fileName,
          title: fileName
        }),
        React.createElement(
          'div',
          { className: 'input-group-btn' },
          isFileSelected ? React.createElement(
            Button,
            { className: 'remove-file', onClick: this.removeFile },
            '\xD7'
          ) : null,
          React.createElement(
            Button,
            {
              className: 'btn-inverse',
              onClick: function onClick() {
                _this2.fileInput.click();
              },
              disabled: this.props.disabled || isFileSelected
            },
            React.createElement(
              'span',
              null,
              this.props.label
            ),
            React.createElement('input', {
              className: 'file-input',
              ref: function ref(_ref) {
                _this2.fileInput = _ref;
              },
              type: 'file',
              onChange: this.onChange,
              accept: this.props.filter,
              'data-test-selector': this.props.dts
            })
          )
        )
      );
    }
  }]);

  return FilePickerComponent;
}(React.Component);

FilePickerComponent.propTypes = {
  disabled: PropTypes.bool,
  dts: PropTypes.string,
  filter: PropTypes.string,
  isHighlighted: PropTypes.bool,
  label: PropTypes.string,
  onRemove: PropTypes.func,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

FilePickerComponent.defaultProps = {
  isHighlighted: false,
  label: 'Select',
  placeholder: 'No file selected',
  disabled: false
};

export default FilePickerComponent;