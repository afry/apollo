## Dropdown

The Dropdown component is used to pass the `open` and `onToggle` props via context to the [DropdownToggle](../DropdownToggle) and [DropdownMenu](../DropdownMenu) components.

#### Example
``` javascript
import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '@afconsult/apollo';

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
      <Dropdown onToggle={this.handleToggle} open={isOpen}>
        <DropdownToggle>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>First Action</DropdownItem>
          <DropdownItem disabled>Second Action</DropdownItem>
          <DropdownItem separator />
          <DropdownItem>Third Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
```

#### Props [Dropdown](./)
| Name      | PropType | Default      | Description |
|-----------|----------|--------------|-------------|
| className | `string` | `undefined`  | Classes to be applied to the DOM element. |
| disabled  | `bool`   | `undefined`  | |
| onToggle  | `func`   | `undefined`  | |
| open      | `bool`   | `false`      | |
| tag       | `[func, string] `| `div`| Specifies the DOM element to be used. |

#### Props [DropdownToggle](../DropdownToggle)
| Name      | PropType | Default      | Description |
|-----------|----------|--------------|-------------|
| active    | `bool`   | `false`      | |
| className | `string` | `undefined`  | Classes to be applied to the DOM element. |
| disabled  | `bool`   | `false`      | |
| onClick   | `func`   | `undefined`  | |
| tag       | `[func, string] `| `a`| Specifies the DOM element to be used. |

#### Props [DropdownMenu](../DropdownMenu)
| Name      | PropType | Default      | Description |
|-----------|----------|--------------|-------------|
| className | `string` | `undefined`  | Classes to be applied to the DOM element. |
| right     | `bool`   | `false`      | |
| tag       | `[func, string] `| `div`| Specifies the DOM element to be used. |

#### Props [DropdownItem](../DropdownItem)
| Name      | PropType | Default      | Description |
|-----------|----------|--------------|-------------|
| active    | `bool`   | `false`     | |
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| disabled  | `bool`   | `false`     | |
| header    | `bool`   | `false`     | |
| href      | `string` | `undefined` | |
| onClick   | `func`   | `undefined` | |
| separator | `bool`   | `false`     |
| tag       | `[func, string] `| `button`| Specifies the DOM element to be used. |

## Basic dropdown

For the most basic use-case a [BasicDropdown](../BasicDropdown) component is provided. It manages its own state the does not require the `onToggle` and `open` props to work. 

#### Example
``` javascript
import React from 'react';
import { BasicDropdown, DropdownItem, DropdownMenu, DropdownToggle } from '@afconsult/apollo';

export default class Example extends React.PureComponent {
  render() {
    return (
      <BasicDropdown>
        <DropdownToggle>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>First Action</DropdownItem>
          <DropdownItem disabled>Second Action</DropdownItem>
          <DropdownItem separator />
          <DropdownItem>Third Action</DropdownItem>
        </DropdownMenu>
      </BasicDropdown>
    );
  }
}
```
