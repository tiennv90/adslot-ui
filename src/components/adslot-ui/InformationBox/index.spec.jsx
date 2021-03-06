import InformationBox from 'adslot-ui/InformationBox';
import React from 'react';
import { shallow } from 'enzyme';

describe('InformationBoxComponent', () => {
  it('should render with props', () => {
    const component = shallow(
      <InformationBox title="render title here" icon="assets/img#done">
        <div>I am child</div>
      </InformationBox>
    );

    expect(component.find('.information-box').prop('className')).to.equal('information-box');
    const titleElement = component.find('.information-box-title');
    expect(titleElement).to.have.length(1);
    expect(titleElement.text()).to.equal('render title here');
    expect(component.find('.information-box-node')).to.have.length(1);
    expect(component.find('.information-box-icon')).to.have.length(1);
  });

  it('should render without a title when title props is not provided', () => {
    const component = shallow(
      <InformationBox icon="assets/img#done">
        <div>I am child</div>
      </InformationBox>
    );

    const titleElement = component.find('.information-box-title');
    expect(titleElement).to.have.length(0);
    expect(component.find('.information-box-node')).to.have.length(1);
    expect(component.find('.information-box-icon')).to.have.length(1);
    expect(component.find('SvgSymbol')).to.have.length(1);
  });

  it('should render without an icon when icon props is not provided', () => {
    const component = shallow(
      <InformationBox title="render title here">
        <div>I am child</div>
      </InformationBox>
    );

    expect(component.find('.information-box-title')).to.have.length(1);
    expect(component.find('.information-box-node').children()).to.have.length(1);
    expect(component.find('.information-box-icon')).to.have.length(0);
  });

  it('should render without children nodes when children props is not provided', () => {
    const component = shallow(<InformationBox title="render title here" icon="assets/img#done" />);

    expect(component.find('.information-box-title')).to.have.length(1);
    expect(component.find('.information-box-icon')).to.have.length(1);
    expect(component.find('.information-box-node').children()).to.have.length(0);
  });

  it('should accept custom class names', () => {
    const component = shallow(<InformationBox title="Class name test title" className="cx" />);

    expect(component.find('.information-box').prop('className')).to.equal('information-box cx');
  });
});
