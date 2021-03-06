import React from 'react';
import Example from '../components/Example';
import { BorderedWell } from '../../src';

class BorderedWellExample extends React.PureComponent {
  render() {
    return <BorderedWell>Content body.</BorderedWell>;
  }
}

const exampleProps = {
  componentName: 'BorderedWell',
  exampleCodeSnippet: '<BorderedWell>Content body.</BorderedWell>',
  propTypeSectionArray: [
    {
      propTypes: [
        {
          propType: 'children',
          type: 'node',
        },
      ],
    },
  ],
};

export default () => (
  <Example {...exampleProps}>
    <BorderedWellExample />
  </Example>
);
