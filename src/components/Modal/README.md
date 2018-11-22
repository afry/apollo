## Modal

#### Example
``` javascript
import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from '@afconsult/apollo';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleToggle = this.handleToggle.bind(this);
  }
  
  handleToggle(e) {
    this.setState(state => { isOpen: !state.isOpen });
  }
  
  render() {
    const { isOpen } = this.state;
    
    return (
      <Modal onToggle={this.handleToggle} open={isOpen}>
        <ModalHeader>
          Header
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor amet sustainable man bun pinterest distillery, celiac bespoke polaroid. 
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    );
  }
}
```

#### Props [Modal](./)
| Name              | PropType | Default     | Description |
|-------------------|----------|-------------|-------------|
| autoFocus         | `bool`   | `true`      |
| backdropClassName | `string` | `undefined` |
| children          | `node`   | `undefined` |
| className         | `string` | `undefined` |
| contentClassName  | `string` | `undefined` |
| dialogClassName   | `string` | `undefined` |
| keyboard          | `bool`   | `false`     |
| onClosed          | `func`   | `undefined` |
| onEnter           | `func`   | `undefined` |
| onExit            | `func`   | `undefined` |
| onOpened          | `func`   | `undefined` |
| onToggle          | `func`   | `undefined` |
| open              | `bool`   | `false`     |
