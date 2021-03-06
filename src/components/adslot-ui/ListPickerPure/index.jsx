import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'react-icheck/lib/Checkbox';
import Radio from 'react-icheck/lib/Radio';
import Empty from 'alexandria/Empty';
import Grid from 'alexandria/Grid';
import GridRow from 'alexandria/Grid/Row';
import GridCell from 'alexandria/Grid/Cell';
import SvgSymbol from 'alexandria/SvgSymbol';

require('./styles.scss');

const isItemSelected = ({ item, selectedItems }) => _.some(selectedItems, { id: item.id });

const ListPickerPureComponent = ({
  allowMultiSelection,
  deselectItem,
  emptyIcon,
  emptyMessage,
  emptySvgSymbol,
  items,
  labelFormatter,
  addonFormatter,
  itemHeaders,
  itemType,
  selectItem,
  selectedItems,
}) => {
  const handleChange = item => (event, checked) => {
    if (checked) {
      selectItem(item, allowMultiSelection);
    } else {
      deselectItem(item, allowMultiSelection);
    }
  };

  const ToggleComponent = allowMultiSelection ? Checkbox : Radio;

  return (
    <div className="listpickerpure-component" data-test-selector={`listpickerpure-component-${_.kebabCase(itemType)}`}>
      {itemHeaders ? (
        <Grid>
          <GridRow type="header">
            <GridCell stretch>{itemHeaders.label}</GridCell>
            <GridCell classSuffixes={['header-toggle']}>{itemHeaders.toggle}</GridCell>
            {addonFormatter ? <GridCell classSuffixes={['header-addon']}>{itemHeaders.addon}</GridCell> : null}
          </GridRow>
        </Grid>
      ) : null}
      <div className="listpickerpure-component-items">
        <Grid>
          {_.map(items, item => (
            <GridRow key={item.id} dts={`${_.kebabCase(itemType)}-${item.id}`}>
              <GridCell stretch dts="label">
                {labelFormatter(item)}
              </GridCell>
              <GridCell classSuffixes={['toggle']} dts="toggle">
                <ToggleComponent checked={isItemSelected({ item, selectedItems })} onChange={handleChange(item)} />
              </GridCell>
              {addonFormatter ? (
                <GridCell classSuffixes={['addon']} dts="addon">
                  {addonFormatter(item)}
                </GridCell>
              ) : null}
            </GridRow>
          ))}
          <Empty collection={items} icon={emptyIcon} svgSymbol={emptySvgSymbol} text={emptyMessage} />
        </Grid>
      </div>
    </div>
  );
};

ListPickerPureComponent.displayName = 'AdslotUiListPickerPureComponent';

const itemProps = PropTypes.shape({
  id: PropTypes.any.isRequired, // id can be numeric or uuid string
});

ListPickerPureComponent.propTypes = {
  allowMultiSelection: PropTypes.bool,
  deselectItem: PropTypes.func,
  emptyIcon: PropTypes.string,
  emptyMessage: PropTypes.string,
  emptySvgSymbol: PropTypes.shape(SvgSymbol.propTypes),
  labelFormatter: PropTypes.func,
  addonFormatter: PropTypes.func,
  itemHeaders: PropTypes.shape({
    label: PropTypes.node,
    toggle: PropTypes.string,
  }),
  items: PropTypes.arrayOf(itemProps),
  itemType: PropTypes.string,
  selectItem: PropTypes.func,
  selectedItems: PropTypes.arrayOf(itemProps),
};

ListPickerPureComponent.defaultProps = {
  allowMultiSelection: true,
  deselectItem: () => {
    throw new Error('AdslotUi ListPickerPure needs a deselectItem handler');
  },
  emptyMessage: 'No items to select.',
  labelFormatter: item => item.label,
  items: [],
  itemType: 'item',
  selectItem: () => {
    throw new Error('AdslotUi ListPickerPure needs a selectItem handler');
  },
  selectedItems: [],
};

export default ListPickerPureComponent;
