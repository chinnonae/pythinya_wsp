import {RaisedButton} from 'material-ui';
const actions = cc.get('redux.actions');
const ticketService = cc.get('services.ticket');
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    ticketService.getTickets(this.props.actions.getTicketCallback);
    this.props.reducer.clientPanel.tickets;
  }
  toggle() {
    var tempData = {
      "booster": {
        "id": 1,
        "email": "taweesoft@gmail.com",
        "first_name": "Taweerat",
        "last_name": "Chaiman"
      },
      "id": 1,
      "status": 1,
      "price": 1000,
      "max_mmr": 2000,
      "min_mmr": 1000,
      "client": null,
      "current_mmr": null,
      "day_used": 5
    };
    this.props.actions.toggleConfirmDialog(true, tempData);
  }
  render() {
    let Dialog = cc.get('components.clientPanel.buyDialog');
    return (
      <div>
        <RaisedButton label="Open" onTouchTap={this.toggle}/>
        <Dialog />
      </div>
    );
  }
}

cc.register('components.clientPanel.wrapperTemp', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
