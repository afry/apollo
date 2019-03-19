# Follow

#### Example

```jsx
const Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { active } = this.state;

    return (
      <Follow
        active={active}
        icon="https://picsum.photos/200/200/?image=1"
        onToggle={this.handleToggle}
      >Stockholm
      </Follow>
    );
  }
}
```

#### Props

| Name      | PropType               | Default     | Description                                                                        |
| --------- | ---------------------- | ----------- | ---------------------------------------------------------------------------------- |
| active    | `bool`                 | `false`     | Classes to be applied to the DOM element.                                          |
| children  | `[func, node, string]` | `undefined` | Collection of DOM child elements.                                                  |
| className | `string`               | `undefined` | Classes to be applied to the DOM element.                                          |
| icon      | `string`               | `undefined` | Specifies the url of an image icon.                                                |
| onToggle  | `func`                 | `undefined` | Enables a toggle button that appears on hover. Called when this button is clicked. |

## Uncontrolled component

For the most basic use-case a [Uncontrolled Follow](../UncontrolledFollow) component is provided. It manages its own state the does not require the `onToggle` and `active` props to work.

#### Example

```jsx
import React from 'react';
import {UncontrolledFollow} from '@afconsult/apollo';

export default class Example extends React.PureComponent {
  render() {
    return (
      <UncontrolledFollow icon="https://picsum.photos/200/200/?image=1">
        Stockholm
      </UncontrolledFollow>
    );
  }
}
```
