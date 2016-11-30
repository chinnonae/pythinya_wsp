import {Snackbar} from 'material-ui';
let actions = cc.get('redux.actions');
class SnackBarComponent extends React.Component {
  requestClose(callback) {
    callback = typeof callback === 'function' ? callback : () => {};
    this.props.actions.toggleSnackBar(false, "");
    callback();
  }
  render() {
    let snackbar = this.props.reducer.app.snackbar;
    return (
      <Snackbar
        contentStyle={{backgroundColor: "white", color:"#3B3B3B"}}
        bodyStyle={{backgroundColor: "white", display: "flex", justifyContent:"center"}}
        className="flex flex-center"
        open={snackbar.isShow}
        message={snackbar.message}
        onRequestClose={this.requestClose.bind(this, snackbar.callback)}
      />
    );
  }
}


cc.register('components.snackbar', connect(mapStateToProps, mapDispatchToProps(actions))(SnackBarComponent));
