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
| Name      | PropType | Default      | Description |
|-----------|----------|--------------|-------------|
| active    | `bool`   | `false`      | Classes to be applied to the DOM element. |
| children  | `[func, node, string]`  | `undefined` | |
| className | `string` | `undefined`  | Classes to be applied to the DOM element. |
| icon      | `string` | `undefined`  | |
| onClick   | `func`   | `undefined`  | | 
| onToggle  | `func`   | `undefined`  | | 
