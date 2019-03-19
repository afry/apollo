# Tag

### Example

```jsx
const Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { open } = this.state;

    return (
      <Tag
        icon="https://picsum.photos/200/200/?image=1"
        onToggle={this.handleToggle}
        open={open}
      >Stockholm
      </Follow>
    );
  }
}
```

#### Props

| Name      | PropType               | Default     | Description                                                                   |
| --------- | ---------------------- | ----------- | ----------------------------------------------------------------------------- |
| children  | `[func, node, string]` | undefined   | Collection of DOM child elements.                                             |
| className | `string`               | `undefined` | Classes to be applied to the DOM element.                                     |
| color     | `string`               | `secondary` | Specifies the tag background color. Can be one of `'primary'`, `'secondary'`. |
| icon      | `string`               | `undefined` | Specifies the url of an image icon.                                           |
| onToggle  | `func`                 | `undefined` | Called for toggling `open` in the controlling component.                      |
| open      | `bool`                 | `true`      | Control the tag visibility state.                                             |
