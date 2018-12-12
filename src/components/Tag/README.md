### Tag 

```javascript
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