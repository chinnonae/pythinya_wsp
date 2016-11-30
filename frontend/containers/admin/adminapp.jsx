import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../theme';
class AdminApp extends React.Component {
  render() {
    /* Components */
    const Appbar = cc.get('components.admin.appbar');
    const Loader = cc.get('components.loader');
    const AlertDialog = cc.get('components.alertDialog');
    const CoinBar = cc.get('components.coinBar');
    let coinBarView;
    if (this.props.reducer.profile.user) {
      coinBarView = <CoinBar />;
    }
    /* rendering */
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Loader />
          <AlertDialog />
          <div className="blur">
            <Appbar />
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(AdminApp);
