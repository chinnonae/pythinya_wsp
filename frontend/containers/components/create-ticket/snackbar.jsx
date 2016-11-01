import {Row, Col} from 'react-bootstrap';
import {FlatButton} from 'material-ui';
class SnackBar extends React.Component {
  close() {
    let element = $('.snackbar-wrapper');
    element.removeClass('snackbar-wrapper-show');
  }
	render() {
		/* Components */
		let Input = cc.get('components.input');
		return (
			<div onClick={this.close.bind(this)} className="snackbar-wrapper">
				<div className="snackbar-container flex">
					<Col xs={12} sm={12} md={6} lg={6} className="container-center no-padding" style={{height: "100%"}}>
						<div className="snackbar padding-all">
							<b>Create Ticket</b>
              <img onClick={this.close.bind(this)} src="/assets/close-black.svg" className="pointer pull-top pull-right margin-right margin-top"/>
							<Row className="flex margin-top">
								<Col className="container-center" xs={11} sm={10} md={10} lg={10}>
									<Row>
										<Col xs={12} sm={12} md={6} lg={6}>
											<Input type="number" label="Min MMR" elementId="min_mmr"/>
										</Col>
										<Col xs={12} sm={12} md={6} lg={6}>
											<Input type="number" label="Max MMR" elementId="max_mmr"/>
										</Col>
									</Row>
									<Row>
										<Col xs={12} sm={12} md={6} lg={6}>
											<Input type="number" label="Price" elementId="price"/>
										</Col>
										<Col xs={12} sm={12} md={6} lg={6}>
											<Input type="number" label="Day used" elementId="day_used"/>
										</Col>
									</Row>
								</Col>
							</Row>
              <Row className='relative margin-top'>
                <FlatButton className="pull-right" label="Done" primary={true}/>
              </Row>
						</div>
					</Col>
				</div>
			</div>
		);
	}
}

cc.register('components.createTicket.snackbar', SnackBar);
