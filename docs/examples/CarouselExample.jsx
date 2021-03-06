import React from 'react';
import Example from '../components/Example';
import { Carousel } from '../../src';

class CarouselExample extends React.PureComponent {
  render() {
    return (
      <Carousel>
        <a style={{ display: 'block' }} href="/">
          <img src="./docs/assets/carousel/carousel-1.jpg" alt="Slide 1" />
        </a>
        <img src="./docs/assets/carousel/carousel-2.jpg" alt="Slide 2" />
        <div style={{ position: 'relative' }}>
          <h2
            style={{
              position: 'absolute',
              right: 0,
              left: 0,
              textAlign: 'center',
              color: '#fff',
            }}
          >
            ＡＥＳＴＨＥＴＩＣＳ<small>Adslot UI</small>
          </h2>
          <img src="./docs/assets/carousel/carousel-3.jpg" alt="Slide 3" />
        </div>
        <img src="./docs/assets/carousel/carousel-4.jpg" alt="Slide 4" />
      </Carousel>
    );
  }
}

const exampleProps = {
  componentName: 'Carousel',
  designNotes: (
    <p>
      Carousel is used to showcase an area with visual message, and allowing marketing to customise propositions to each
      region. Arrows on each end are used to slide through each panel.
    </p>
  ),
  exampleCodeSnippet: `
  <Carousel>
    <a style={{ display: 'block' }} href="/">
      <img src="./docs/assets/carousel/carousel-1.jpg" alt="Slide 1" />
    </a>
    <img src="./docs/assets/carousel/carousel-2.jpg" alt="Slide 2" />
    <div style={{ position: 'relative' }}>
      <h2
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          textAlign: 'center',
          color: '#fff',
        }}
      >ＡＥＳＴＨＥＴＩＣＳ<small>Adslot UI</small></h2>
      <img src="./docs/assets/carousel/carousel-3.jpg" alt="Slide 3" />
    </div>
    <img src="./docs/assets/carousel/carousel-4.jpg" alt="Slide 4" />
  </Carousel>`,
  propTypeSectionArray: [
    {
      propTypes: [
        {
          propType: 'children',
          type: 'node',
        },
        {
          propType: 'className',
          type: 'string',
        },
        {
          propType: 'Nuka Carousel prop types',
          type: '',
          note: <a href="https://github.com/FormidableLabs/nuka-carousel">See Nuka Carousel docs for other options</a>,
        },
      ],
    },
  ],
};

export default () => (
  <Example {...exampleProps}>
    <CarouselExample />
  </Example>
);
