## Modal

The Modal component pass the `onToggle` prop via context to the [ModalHeader](../ModalHeader) component.

#### Example

```jsx
import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from '@afconsult/apollo';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.setState(prevState => {
      open: !prevState.open;
    });
  }

  render() {
    const { open } = this.state;

    return (
      <Modal onToggle={this.handleToggle} open={open}>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor amet sustainable man bun pinterest distillery,
          celiac bespoke polaroid.
        </ModalBody>
        <ModalFooter />
      </Modal>
    );
  }
}
```

#### Props [Modal](./)

| Name              | PropType | Default     | Description                                                          |
| ----------------- | -------- | ----------- | -------------------------------------------------------------------- |
| autoFocus         | `bool`   | `true`      | Specifies that the modal should automatically get focus when opened. |
| backdropClassName | `string` | `undefined` |                                                                      |
| children          | `node`   | `undefined` | Collection of DOM child elements.                                    |
| className         | `string` | `undefined` | Classes to be applied to the DOM element.                            |
| contentClassName  | `string` | `undefined` |                                                                      |
| dialogClassName   | `string` | `undefined` |                                                                      |
| keyboard          | `bool`   | `false`     | Allow closing the modal with the escape button if set `true`.        |
| onClosed          | `func`   | `undefined` | Called when done transitioning out.                                  |
| onEnter           | `func`   | `undefined` | Called on componentDidMount.                                         |
| onExit            | `func`   | `undefined` | Called on componentWillUnmount.                                      |
| onOpened          | `func`   | `undefined` | Called when done transitioning in.                                   |
| onToggle          | `func`   | `undefined` | Called for toggling `open` in the controlling component.             |
| open              | `bool`   | `false`     | Control the modal visibility state.                                  |

#### Props [ModalHeader](../ModalHeader)

| Name      | PropType         | Default     | Description                               |
| --------- | ---------------- | ----------- | ----------------------------------------- |
| children  | `node`           | `undefined` | Collection of DOM child elements.         |
| className | `string`         | `undefined` | Classes to be applied to the DOM element. |
| tag       | `[func, string]` | `h3`        | Specifies the DOM element to be used.     |

#### Props [ModalBody](../ModalBody)

| Name      | PropType         | Default     | Description                               |
| --------- | ---------------- | ----------- | ----------------------------------------- |
| className | `string`         | `undefined` | Classes to be applied to the DOM element. |
| tag       | `[func, string]` | `div`       | Specifies the DOM element to be used.     |

#### Props [ModalFooter](../ModalFooter)

| Name      | PropType         | Default     | Description                               |
| --------- | ---------------- | ----------- | ----------------------------------------- |
| className | `string`         | `undefined` | Classes to be applied to the DOM element. |
| tag       | `[func, string]` | `div`       | Specifies the DOM element to be used.     |
