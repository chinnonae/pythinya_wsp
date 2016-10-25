import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './theme';
class App extends React.Component {
  render() {
    /* Components */
    var Appbar = cc.get('components.appbar');
    /* rendering */
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Appbar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
