import {RaisedButton, AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import muiTheme from './theme';
injectTapEventPlugin();
export default class Wrapper extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
          <AppBar title="Pythinya"/>
				</div>
			</MuiThemeProvider>
		);
	}
}
ReactDOM.render(
	<Wrapper/>, document.getElementById('app'));
