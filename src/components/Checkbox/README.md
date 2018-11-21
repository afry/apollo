## Checkbox

The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.

The checkbox component should be used with other components such as [FormGroup](https://github.com/afconsult/apollo/tree/develop/src/components/FormGroup) and [Label](https://github.com/afconsult/apollo/tree/develop/src/components/Label).

#### Example
``` javascript
class Example extends React.Component {
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
      <FormGroup check>
        <Label for="example_checkbox">
          <Checkbox
            id="example_checkbox"
            onChange={this.handleChange}
          /> Default
        </Label>
      </FormGroup>
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


The component also support [HTML DOM Input Checkbox](https://www.w3schools.com/jsref/dom_obj_checkbox.asp) Object Properties.
