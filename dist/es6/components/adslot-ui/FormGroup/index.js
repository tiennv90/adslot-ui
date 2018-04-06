'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

var FormGroupComponent = function FormGroupComponent(_ref) {
  var addon = _ref.addon,
      disabled = _ref.disabled,
      helpText = _ref.helpText,
      label = _ref.label,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value;

  var addonElement = addon ? React.createElement(
    'div',
    { className: 'input-group-addon' },
    addon
  ) : null;
  var inputId = _.kebabCase(label);
  return React.createElement(
    'div',
    { className: 'form-group' },
    React.createElement(
      'label',
      { htmlFor: inputId, className: 'control-label col-xs-3' },
      label
    ),
    React.createElement(
      'div',
      { className: 'col-xs-5' },
      React.createElement(
        'div',
        { className: 'input-group col-xs-12' },
        addonElement,
        React.createElement('input', {
          className: 'form-control',
          disabled: disabled,
          id: inputId,
          onChange: onChange,
          placeholder: placeholder,
          type: 'text',
          value: value
        })
      ),
      React.createElement(
        'p',
        { className: 'help-block' },
        helpText
      )
    )
  );
};

FormGroupComponent.displayName = 'AdslotUiFormGroupComponent';

FormGroupComponent.propTypes = {
  addon: PropTypes.string,
  disabled: PropTypes.bool,
  helpText: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string
};

FormGroupComponent.defaultProps = {
  disabled: false,
  value: ''
};

export default FormGroupComponent;