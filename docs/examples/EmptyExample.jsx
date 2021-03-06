import React from 'react';
import Example from '../components/Example';
import { Empty } from '../../src';

class EmptyExample extends React.PureComponent {
  render() {
    return (
      <div>
        <Empty
          collection={[]}
          text="No items selected"
          svgSymbol={{
            href: './docs/assets/svg-symbols.svg#checklist-incomplete',
          }}
        />
      </div>
    );
  }
}

const exampleProps = {
  componentName: 'Empty',
  designNotes: (
    <p>
      Empty states should be used when data or information is not available. Always display a graphic icon with
      supported copy to give context to the empty area.
    </p>
  ),
  notes: 'Given a collection prop will render an empty state when collection is empty.',
  exampleCodeSnippet: `
    <Empty
      collection={[]}
      text="No items selected"
      svgSymbol={{ href: './docs/assets/svg-symbols.svg#checklist-incomplete' }}
    />
  `,
  propTypeSectionArray: [
    {
      propTypes: [
        {
          propType: 'collection',
          type: 'node',
          defaultValue: 'null',
        },
        {
          propType: 'text',
          type: 'node',
          defaultValue: 'Nothing to show.',
        },
        {
          propType: 'svgSymbol',
          type: 'shape',
          note: (
            <span>
              Accepts <a href="#svg-symbol-example">SVG Symbol</a> props such as href.
            </span>
          ),
        },
        {
          propType: 'hideIcon',
          type: 'boolean',
          defaultValue: 'false',
          note: 'Whether or not the SVG Symbol should be displayed.',
        },
      ],
    },
  ],
};

export default () => (
  <Example {...exampleProps}>
    <EmptyExample />
  </Example>
);
