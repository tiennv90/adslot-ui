import React from 'react';
import Example from '../components/Example';
import RadioGroup from 'adslot-ui/RadioGroup';
import Radio from 'adslot-ui/Radio';

class RadioGroupExample extends React.PureComponent {
  onChangeGroup(event) {
    _.noop();
  }

  onChangeIndividual(event) {
    _.noop();
  }

  render() {
    return (
      <RadioGroup name="hobbies" value="badminton" onChange={this.onChangeGroup} dts="radio-group-dts">
        <Radio value="swimming" label="Swimming" dts="radio-dts" />
        <Radio value="soccer" label="Soccer" onChange={this.onChangeIndividual} />
        <Radio value="badminton" label="Badminton" />
      </RadioGroup>
    );
  }
}

const exampleProps = {
  componentName: 'RadioGroup',
  designNotes: (
    <p>
      <span className="text-bold">Radio buttons</span> used for making a single selection from multiple options. Only
      one selection can ever be made from the radio button group at a time.
    </p>
  ),
  notes: '',
  exampleCodeSnippet: `<RadioGroup name="hobbies" value="badminton" onChange={this.onChangeGroup} dts="radio-group-dts">
  <Radio value="swimming" label="Swimming" dts="radio-dts" />
  <Radio value="soccer" label="Soccer" onChange={this.onChangeIndividual} />
  <Radio value="badminton" label="Badminton" />
</RadioGroup>`,
  propTypeSectionArray: [
    {
      propTypes: [
        {
          propType: 'id',
          type: 'string',
        },
        {
          propType: 'className',
          type: 'string',
        },
        {
          propType: 'name',
          type: 'string',
          note: (
            <span>
              <strong>Required.</strong> All Radio buttons within this group will have the same name
            </span>
          ),
        },
        {
          propType: 'value',
          type: 'string',
          note: 'value of the selected radio button, should be one of children <Radio /> values',
        },
        {
          propType: 'children',
          type: 'arrayOf <Radio /> elements',
          note: <strong>Required.</strong>,
        },
        {
          propType: 'onChange',
          type: 'func',
          note: 'Triggers when selection changes.',
        },
        {
          propType: 'dts',
          type: 'string',
          note: 'render `data-test-selector` onto the component. It can be useful for testing.',
        },
      ],
    },
  ],
};

export default () => (
  <Example {...exampleProps}>
    <RadioGroupExample />
  </Example>
);
