import {Row,Col} from 'react-bootstrap';
import {RaisedButton} from 'material-ui';
class Wrapper extends React.Component {
  showSnackbar() {
    let element = $('.snackbar-wrapper');
    element.addClass('snackbar-wrapper-show');
  }
  render() {
    /* Components */
    let SnackBar = cc.get('components.createTicket.snackbar');
    return (
      <div>
        <RaisedButton onTouchTap={this.showSnackbar.bind(this)} label="New Ticket" primary={true} />
        <SnackBar />
      </div>
    );
  }
}

cc.register('components.createTicket', Wrapper);
