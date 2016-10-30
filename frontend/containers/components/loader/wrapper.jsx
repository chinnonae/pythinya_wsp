const actions = cc.get('redux.actions');
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    var showLoader = this.props.reducer.app.showLoader;
    const element = $('.blur');
    element.removeClass('blur-onblur');
    if(showLoader) {
      element.addClass('blur-onblur');
    }
    var style = {
      display: showLoader ? 'initial' : 'none',
      transition: '0.4s ease-in'
    };
		return (
      <div style={style}>
        <div className="blur-bg">
  			</div>
        <div className="loader-wrapper flex flex-middle">
          <div className="loader container-center">
            <span className="dot dot_1"></span>
            <span className="dot dot_2"></span>
            <span className="dot dot_3"></span>
            <span className="dot dot_4"></span>
          </div>
        </div>
      </div>

		);
	}
}

cc.register('components.loader', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
