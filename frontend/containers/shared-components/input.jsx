class Input extends React.Component {
  componentDidMount() {
    var labelElement = $('.input-label');
  }
  render() {
    var labelClass = '';
    if(this.props.error){ labelClass += 'error-text active'; }
    return (
      <div className="phAnimate">
          <label className={labelClass} htmlFor={this.props.elemenId}>{this.props.label}</label>
          <input name={this.props.name} type={this.props.type || 'text'} className="form-control" id={this.props.elementId}/>
      </div>
    );
  }
}
cc.register("components.input", Input);
