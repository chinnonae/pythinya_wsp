class Input extends React.Component {
  render() {
    return (
      <div className="phAnimate">
          <label htmlFor={this.props.elemenId}>{this.props.label}</label>
          <input type="text" className="form-control" id={this.props.elementId}/>
      </div>
    );
  }
}
cc.register("components.input", Input);
