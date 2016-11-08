import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './theme';
class App extends React.Component {
  render() {
    /* Components */
    const Appbar = cc.get('components.appbar');
    const Loader = cc.get('components.loader');
    /* rendering */
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Loader />
          <div className="blur">
            <Appbar />
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default connect(mapStateToProps)(App);
