const React = window.React;
const ReactDOM = window.ReactDOM;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    return React.createElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
export default {
    mount(rootElement, props) {
        ReactDOM.render(
            React.createElement(LikeButton, props),
            rootElement,
        );
    }
};
