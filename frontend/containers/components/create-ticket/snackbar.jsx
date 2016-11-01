import {Row, Col} from 'react-bootstrap';
import {FlatButton} from 'material-ui';
const boosterService = cc.get('services.booster');
const actions = cc.get('redux.actions');
class SnackBar extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    let form = $('#create-ticket-form');
    let rawData = form.serializeArray();
    boosterService.createTicket(rawData, this.props.actions.createTicketCallback);
  }
  close() {
    let element = $('.snackbar-wrapper');
    element.removeClass('snackbar-wrapper-show');
  }
	render() {
		/* Components */
		let Input = cc.get('components.input');
    const reducer = this.props.reducer.boosterPanel;
    const error = !reducer.createTicketDialog.isSuccess;
    const errorMessage = reducer.createTicketDialog.message;
    const errorField = reducer.createTicketDialog.errorField;
    const titleClassName = error ? 'error-text' : '';
    let title = 'Create Ticket';
    title += error ? _.template(' (${error})')({error: errorMessage}) : '';
		return (
			<div className="snackbar-wrapper">
        <div onClick={this.close.bind(this)} className="dark-wrapper"></div>
				<div className="snackbar-container flex">
            <Col xs={12} sm={12} md={6} lg={6} className="container-center no-padding" style={{height: "100%"}}>
              <div className="snackbar padding-all">
              <form id="create-ticket-form" onSubmit={this.onSubmit}>
                <b className={titleClassName}>{title}</b>
                <img onClick={this.close.bind(this)} src="/assets/close-black.svg" className="pointer pull-top pull-right margin-right margin-top"/>
                <Row className="flex margin-top">
                  <Col className="container-center" xs={11} sm={10} md={10} lg={10}>
                    <Row>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Input error={errorField.min_mmr} type="number" label="Min MMR" elementId="min_mmr" name="min_mmr"/>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Input error={errorField.max_mmr} type="number" label="Max MMR" elementId="max_mmr" name="max_mmr"/>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Input error={errorField.price} type="number" label="Price" elementId="price" name="price"/>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Input error={errorField.day_used} type="number" label="Day used" elementId="day_used" name="day_used"/>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='relative margin-top'>
                  <FlatButton type="submit" className="pull-right" label="Done" primary={true}/>
                </Row>
                </form>
              </div>
            </Col>
				</div>
			</div>
		);
	}
}

cc.register('components.createTicket.snackbar', connect(mapStateToProps, mapDispatchToProps(actions))(SnackBar));
