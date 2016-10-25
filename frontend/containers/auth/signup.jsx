var Input = cc.get('components.input');
class Signup extends React.Component {
  render() {
    return (
      <div>
        <Input label="Username" />
      </div>
    );
  }
}

cc.register('components.signup', Signup);
