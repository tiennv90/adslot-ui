import React from 'react';
import Example from '../components/Example';
import { Nav, NavItem } from '../../src';

class NavigationExample extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 0,
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(eventKey) {
    this.setState({ activeKey: eventKey });
  }

  render() {
    return (
      <Nav activeKey={this.state.activeKey} onSelect={this.onSelect}>
        <NavItem eventKey={0} href="#" title="Dashboard Home" className="dashboard-tab">
          Dashboard
        </NavItem>
        <NavItem eventKey={1} title="Analytics Reporting">
          Reports
        </NavItem>
      </Nav>
    );
  }
}

const exampleProps = {
  componentName: 'Navigation Tabs',
  designNotes: (
    <div>
      <p>Primarily used as secondary level navigation which requires users to switch between views and information.</p>
      <label>Example: Campaign navigation.</label>
    </div>
  ),
  exampleCodeSnippet: `
  <Nav activeKey={this.state.activeKey} onSelect={this.onSelect}>
    <NavItem eventKey={0} href="#" title="Dashboard Home" className="dashboard-tab"}>Dashboard</NavItem>
    <NavItem eventKey={1} title="Analytics Reporting">Reports</NavItem>
  </Nav>`,
  propTypeSectionArray: [
    {
      propTypes: [
        {
          propType: 'React Bootstrap Nav prop types',
          type: '',
          defaultValue: '',
          note: (
            <a
              href="https://react-bootstrap.github.io/components/navs/#navs-props"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Bootstrap Docs
            </a>
          ),
        },
        {
          propType: 'dts',
          type: 'string',
          note: 'data-test-selector; used for testing purposes',
        },
        {
          propType: 'barPosition',
          type: "oneOf: 'top', 'bottom'",
          defaultValue: 'bottom',
          note: 'Determine the position of selected tab bar indicator',
        },
      ],
    },
  ],
};

export default () => (
  <Example {...exampleProps}>
    <NavigationExample />
  </Example>
);
