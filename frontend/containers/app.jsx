import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './theme';
class App extends React.Component {
  render() {
    /* Components */
    const Appbar = cc.get('components.appbar');
    const Loader = cc.get('components.loader');
    const AlertDialog = cc.get('components.alertDialog');
    const CoinBar = cc.get('components.coinBar');
    /* rendering */
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Loader />
          <AlertDialog />
          <div className="blur">
            <Appbar />
            <CoinBar />
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default connect(mapStateToProps)(App);
