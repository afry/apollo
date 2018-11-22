## Button


#### Example
``` javascript
import React from 'react';
import { Button } from '@afconsult/apollo';

export default class Example extends React.PureComponent {  
  render() {
    return (
      <div>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="success">success</Button>
        <Button color="danger">danger</Button>
        <Button color="link">link</Button>
      </div>
    );
  }
}
```

#### Props
| Name      | PropType | Default     | Description |
|-----------|----------|-------------|-------------|
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| color     | `string` | `secondary` | Specifies the button color. Can be one of `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'link'`. |
| disabled  | `bool`   | `false`     | Specifies that the DOM element should be disabled. |
| onClick   | `func`   | `undefined` | Called when the value of the DOM element has been changed. |
| size      | `string` | `undefined` | Specifies the button size. Can be one of `small (144px*40px)` or `large (145px*56px)`. Default is `154px*48px` |
| tag       | `[func, string]` | `button` | Specifies the DOM element to be used. |
| type      | `['button', 'submit', 'reset']` | `button` | 	Specifies the type of form element the input button is. |

The component also support [HTML DOM Input Button](https://www.w3schools.com/jsref/dom_obj_button.asp) Object Properties.
