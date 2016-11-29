import {Row, Col} from 'react-bootstrap';
import {FlatButton} from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
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
    boosterService.createTicket(rawData, this.props.actions.createTicketCallback, this.props.actions.showAlertDialog);
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
    let titleClassName = error ? 'error-text' : '';
    titleClassName += " padding-left";
    let title = 'Create Ticket';
    title += error ? _.template(' (${error})')({error: errorMessage}) : '';
		return (
			<div className="snackbar-wrapper">
        <div onClick={this.close.bind(this)} className="dark-wrapper"></div>
				<div className="snackbar-container flex">
            <Col xs={12} sm={6} md={6} lg={6} className="container-center no-padding" style={{height: "100%"}}>
              <div className="snackbar padding-all black-secondary">
              <form id="create-ticket-form" onSubmit={this.onSubmit}>
                <div>
                  <img src="/assets/tag.svg" />
                  <b className={titleClassName}>{title}</b>
                </div>


                <CloseIcon onClick={this.close.bind(this)} color="white" className="pointer pull-top pull-right margin-top margin-right"/>
                {/* <img onClick={this.close.bind(this)} src="/assets/close-black.svg" className="pointer pull-top pull-right margin-right margin-top"/> */}
                <Row className="flex margin-top">
                  <Col className="container-center" xs={11} sm={10} md={10} lg={10}>
                    <Row>
                      <Col xs={12} sm={6} md={6} lg={6}>
                        <Input error={errorField.min_mmr} type="number" label="Min MMR" elementId="min_mmr" name="min_mmr"/>
                      </Col>
                      <Col xs={12} sm={6} md={6} lg={6}>
                        <Input error={errorField.max_mmr} type="number" label="Max MMR" elementId="max_mmr" name="max_mmr"/>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} sm={6} md={6} lg={6}>
                        <Input error={errorField.price} type="number" label="Price" elementId="price" name="price"/>
                      </Col>
                      <Col xs={12} sm={6} md={6} lg={6}>
                        <Input error={errorField.day_used} type="number" label="Day used" elementId="day_used" name="day_used"/>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='relative margin-top'>
                  <FlatButton type="submit" className="pull-right success-text" label="Done"/>
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
