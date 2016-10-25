
class Signup extends React.Component {
  render() {
    /* Components */
    var Input = cc.get('components.input');
    /* rendering */
    return (
      <div>
        <Input label="Username" />
      </div>
    );
  }
}

cc.register('components.signup', Signup);
