import React from 'react';
import PropTypes from 'prop-types';
import GridCell from 'alexandria/Grid/Cell';
import Spinner from 'alexandria/Spinner';

const TreePickerNodeExpander = ({ isLoading, onClick }) => {
  const props = {
    dts: 'expander',
  };

  if (!isLoading) props.onClick = onClick;

  return (
    <GridCell {...props}>
      {isLoading ? <Spinner size="small" /> : <div className="treepickernode-component-expander" />}
    </GridCell>
  );
};

TreePickerNodeExpander.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

TreePickerNodeExpander.defaultProps = {
  isLoading: false,
};

export default TreePickerNodeExpander;
