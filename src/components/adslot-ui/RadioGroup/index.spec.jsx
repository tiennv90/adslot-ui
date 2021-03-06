import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Radio from '../Radio';
import RadioGroup from '.';

describe('<RadioGroup />', () => {
  let props;

  beforeEach(() => {
    props = {
      id: 'radio-group-id',
      className: 'radio-group-custom-class',
      name: 'hobbies',
      value: 'badminton',
      onChange: sinon.spy(),
      dts: 'radio-group-dts',
    };
  });

  it('should render with props', () => {
    const component = shallow(
      <RadioGroup {...props}>
        <Radio label="Swimming" value="swimming" />
        <Radio label="Soccer" value="soccer" />
        <Radio label="Badminton" value="badminton" />
      </RadioGroup>
    );

    expect(component.find(Radio)).to.have.length(3);
    expect(component.find('#radio-group-id')).to.have.length(1);
    expect(component.find('.radio-group-custom-class')).to.have.length(1);
    expect(component.find('[data-test-selector="radio-group-dts"]')).to.have.length(1);
  });

  it('should update state and trigger props.onChange when selection changes', () => {
    const component = shallow(
      <RadioGroup {...props}>
        <Radio label="Swimming" value="swimming" />
        <Radio label="Soccer" value="soccer" />
        <Radio label="Badminton" value="badminton" />
      </RadioGroup>
    );

    expect(component.state('value')).to.equal('badminton');
    component
      .find(Radio)
      .at(0)
      .simulate('change', { target: { value: 'swimming' } });
    expect(component.state('value')).to.equal('swimming');
    expect(props.onChange.calledOnce).to.equal(true);
  });

  it('should still update state when props.onChange is not available', () => {
    delete props.onChange;
    const component = shallow(
      <RadioGroup {...props}>
        <Radio label="Swimming" value="swimming" />
        <Radio label="Soccer" value="soccer" />
        <Radio label="Badminton" value="badminton" />
      </RadioGroup>
    );

    expect(component.state('value')).to.equal('badminton');
    component
      .find(Radio)
      .at(1)
      .simulate('change', { target: { value: 'soccer' } });
    expect(component.state('value')).to.equal('soccer');
  });

  it('should call Radio props.onChange when selecting that radio button', () => {
    const onChangeSwimming = sinon.spy();
    const onChangeSoccer = sinon.spy();

    const component = shallow(
      <RadioGroup {...props}>
        <Radio label="Swimming" value="swimming" onChange={onChangeSwimming} />
        <Radio label="Soccer" value="soccer" onChange={onChangeSoccer} />
        <Radio label="Badminton" value="badminton" />
      </RadioGroup>
    );

    component
      .find(Radio)
      .at(0)
      .simulate('change', { target: { value: 'swimming' } });
    expect(onChangeSwimming.calledOnce).to.equal(true);
    expect(onChangeSoccer.called).to.equal(false);
    expect(props.onChange.calledOnce).to.equal(true);
  });

  describe('getDerivedStateFromProps()', () => {
    let component;

    beforeEach(() => {
      component = shallow(
        <RadioGroup {...props}>
          <Radio label="Swimming" value="swimming" />
          <Radio label="Soccer" value="soccer" />
          <Radio label="Badminton" value="badminton" />
        </RadioGroup>
      );
    });

    it('should update selected value when `prop.value` changes', () => {
      props.value = 'soccer';
      component.setProps(props);
      expect(component.state('value')).to.equal('soccer');
    });

    it('should NOT update selected value when other props attributes change', () => {
      props.id = 'new-id';
      props.name = 'some-other-name';
      component.setProps(props);
      expect(component.state('value')).to.equal('badminton');
    });
  });
});
