'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

var ConfirmModalComponent = function ConfirmModalComponent(_ref) {
  var buttonCancelLabel = _ref.buttonCancelLabel,
      buttonConfirmLabel = _ref.buttonConfirmLabel,
      modalApply = _ref.modalApply,
      modalClose = _ref.modalClose,
      modalDescription = _ref.modalDescription,
      modalTitle = _ref.modalTitle,
      show = _ref.show;

  var cancelAction = function cancelAction() {
    modalClose();
  };

  var applyAction = function applyAction() {
    modalApply();
    modalClose();
  };

  return React.createElement(
    Modal,
    { className: 'confirm-modal-component', show: show, bsSize: 'small', keyboard: false },
    modalTitle ? React.createElement(
      Modal.Header,
      null,
      React.createElement(
        Modal.Title,
        null,
        modalTitle
      )
    ) : null,
    React.createElement(
      Modal.Body,
      null,
      React.createElement(
        'p',
        null,
        modalDescription
      )
    ),
    React.createElement(
      Modal.Footer,
      null,
      modalClose ? React.createElement(
        Button,
        { className: 'btn-inverse', onClick: cancelAction, 'data-test-selector': 'confirm-modal-cancel' },
        buttonCancelLabel
      ) : null,
      React.createElement(
        Button,
        { bsStyle: 'primary', onClick: applyAction, 'data-test-selector': 'confirm-modal-confirm' },
        buttonConfirmLabel
      )
    )
  );
};

ConfirmModalComponent.displayName = 'AdslotUiConfirmModalComponent';

ConfirmModalComponent.propTypes = {
  buttonCancelLabel: PropTypes.string,
  buttonConfirmLabel: PropTypes.string,
  modalApply: PropTypes.func,
  modalClose: PropTypes.func,
  modalDescription: PropTypes.string,
  modalTitle: PropTypes.string,
  show: PropTypes.bool
};

ConfirmModalComponent.defaultProps = {
  buttonCancelLabel: 'Cancel',
  buttonConfirmLabel: 'Confirm',
  modalApply: function modalApply() {
    throw new Error('AdslotUi ConfirmModal needs a modalApply handler');
  },
  modalDescription: 'Are you sure?',
  show: false
};

export default ConfirmModalComponent;