class Input extends React.Component {
  componentDidMount() {
    var labelElement = $('.input-label');
  }
  render() {
    var labelClass = '';
    if(this.props.error){ labelClass += 'error-text'; }
    let ele = $('#'+this.props.elementId);
    if(ele.length > 0 && (ele[0].value).length > 0) {
      labelClass += ' active';
    }
    return (
      <div className="phAnimate">
          <label className={labelClass} htmlFor={this.props.elemenId}>{this.props.label}</label>
          <input onChange={this.props.onChange} name={this.props.name} type={this.props.type || 'text'} className="form-control" style={{backgroundColor: "white"}} id={this.props.elementId}/>
      </div>
    );
  }
}
cc.register("components.input", Input);
