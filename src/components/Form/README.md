# Form
#### Example
``` jsx
import React from 'react';
import { Form, FormGroup, Label, Input } from '@afconsult/apollo';

export default class Example extends React.PureComponent {  
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="form_example">Valid</Label>
          <Input id="form_example" placeholder="Text" />
        </FormGroup>
      </Form>
    );
  }
}
```

``` jsx
import React from 'react';
import { Form, FormGroup, Label, Input } from '@afconsult/apollo';

export default class Example extends React.PureComponent {  
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="form_inline_example">Valid</Label>
          <Input id="form_inline_example" placeholder="Text" />
        </FormGroup>
      </Form>
    );
  }
}
```

``` jsx
import React from 'react';
import { Form, FormGroup, FormFeedback, Label, Input } from '@afconsult/apollo';

export default class Example extends React.PureComponent {  
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="form_feedback_example">Valid</Label>
          <Input id="form_feedback_example" placeholder="Text" />
          <FormFeedback valid>Hurray! Something worked.</FormFeedback>
        </FormGroup>
      </Form>
    );
  }
}
```

#### Props
| Name      | PropType | Default     | Description |
|-----------|----------|-------------|-------------|
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| inline    | `bool`   | `false`     | |
| innerRef  | `[func, object, string]` | `undefined` | |

#### Props [FormGroup](../FormGroup)
| Name      | PropType | Default     | Description |
|-----------|----------|-------------|-------------|
| check     | `bool`   | `false`     | |
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| inline    | `bool`   | `false`     | |

#### Props [FormFeedback](../FormFeedback)
| Name      | PropType | Default     | Description |
|-----------|----------|-------------|-------------|
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| indented  | `bool`   | `false`     | |
| valid     | `bool`   | `false`     | Specifies the value of the DOM element. |

## Input Types
All input components also support [HTML DOM Input](https://www.w3schools.com/tags/tag_input.asp) Object Properties.
### [Checkbox](../Checkbox)
#### Example
``` jsx
import React from 'react';
import { Form, FormGroup, Label, Checkbox } from '@afconsult/apollo';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const { currentTarget } = event;
    console.log(`Checked: ${currentTarget.checked}`);
  }
  
  render() {
    return (
      <Form>
        <FormGroup check>
          <Label for="example_checkbox">
            <Checkbox id="example_checkbox" onChange={this.handleChange} /> Default
          </Label>
        </FormGroup>
      </Form>
    );
  }
}
```

#### Props
| Name      | PropType | Default   | Description |
|-----------|----------|-----------|-------------|
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| disabled  | `bool`   | `false`     | Specifies that the DOM element should be disabled. |
| id        | `string` | `undefined` | A unique id for the DOM element. |
| innerRef  | `[func, object, string]` | `undefined` | Add a `ref` to the DOM element. |
| name      | `string` | `undefined` | 	Specifies the name of the DOM element. |
| onChange  | `func`   | `undefined` | Called when the value of the DOM element has been changed. |
| value     | `string` | `undefined` | Specifies the value of the DOM element. |

### [Input](../Input)
#### Example
``` jsx
import React from 'react';
import { Form, FormGroup, Label, Input } from '@afconsult/apollo';

export default class Example extends React.PureComponent {  
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="disabled_input">Disabled</Label>
          <Input disabled id="disabled_input" placeholder="Disabled" />
        </FormGroup>
      </Form>
    );
  }
}
```

#### Props
| Name      | PropType | Default     | Description |
|-----------|----------|-------------|-------------|
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| innerRef  | `[func, object, string]` | `undefined` | Add a `ref` to the DOM element. |
| onChange  | `func`   | `undefined` | Called when the value of the DOM element has been changed. |
| type      | `string` | `text`      | Specifies the type of the DOM element. Can be one of `text`, `number`, `password`, `email`, `tel`. |

### [RadioButton](../RadioButton)
#### Example
``` jsx
import React from 'react';
import { Form, FormGroup, Label, RadioButton } from '@afconsult/apollo';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const { currentTarget } = event;
  }
  
  render() {
    return (
      <Form>
        <FormGroup check>
          <Label for="radio_button_example">
            <RadioButton id="radio_button_example" /> Default
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label for="focused_radio_button_inlined_example">
            <RadioButton checked id="focused_radio_button_inlined_example" /> Focus
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label for="disabled_radio_button_example">
            <RadioButton disabled id="disabled_radio_button_example" /> Disabled
          </Label>
        </FormGroup>
      </Form>
    );
  }
}
```

#### Props
| Name      | PropType | Default     | Description |
|-----------|----------|-------------|-------------|
| checked   | `bool`   | `false`     | |
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| disabled  | `bool`   | `false`     | Specifies that the DOM element should be disabled. |
| id        | `string` | `undefined` | A unique id for the DOM element. |
| name      | `string` | `undefined` | 	Specifies the name of the DOM element. |
| onChange  | `func`   | `undefined` | Called when the value of the DOM element has been changed. |
| readOnly  | `bool`   | `false`     | |
| value     | `string` | `undefined` | Specifies the value of the DOM element. |

### [Select](../Select)
#### Example
``` jsx
import React from 'react';
import { Form, FormGroup, Label, Select, SelectOption } from '@afconsult/apollo';

export default class Example extends React.PureComponent {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="select_example">Select</Label>
          <Select id="select_example" required value="first">
            <SelectOption disabled hidden value="">Hidden Option</SelectOption>
            <SelectOption value="first">First Option</SelectOption>
            <SelectOption value="second">Second Option</SelectOption>
            <SelectOption value="third">Third Option</SelectOption>
          </Select>
        </FormGroup>
      </Form>
    );
  }
}
```

#### Props
| Name      | PropType | Default     | Description |
|-----------|----------|-------------|-------------|
| checked   | `bool`   | `false`     | |
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| disabled  | `bool`   | `false`     | Specifies that the DOM element should be disabled. |
| id        | `string` | `undefined` | A unique id for the DOM element. |
| name      | `string` | `undefined` | Specifies the name of the DOM element. |
| onChange  | `func`   | `undefined` | Called when the value of the DOM element has been changed. |
| readOnly  | `bool`   | `false`     | |
| value     | `string` | `undefined` | Specifies the value of the DOM element. |

### [TextArea](../TextArea)
#### Example
``` jsx
import React from 'react';
import { Form, FormGroup, Label, TextArea } from '@afconsult/apollo';

export default class Example extends React.PureComponent {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="textarea_example">Select</Label>
          <TextArea id="textarea_example" />
        </FormGroup>
      </Form>
    );
  }
}
```

#### Props
| Name      | PropType | Default     | Description |
|-----------|----------|-------------|-------------|
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| columns   | `string` | `39`        |
| disabled  | `bool`   | `false`     | Specifies that the DOM element should be disabled. |
| id        | `string` | `undefined` | A unique id for the DOM element. |
| innerRef  | `[func, object, string]` | `undefined` | Add a `ref` to the DOM element. |
| onChange  | `func`   | `undefined` | Called when the value of the DOM element has been changed. |
| rows      | `string` | `1`         |
