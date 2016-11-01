import {Row, Col} from 'react-bootstrap';
class SnackBar extends React.Component {
  close() {
    let element = $('.snackbar-wrapper');
    element.removeClass('snackbar-wrapper-show');
  }
	render() {
		/* Components */
		let Input = cc.get('components.input');
		return (
			<div className="snackbar-wrapper">
				<div className="snackbar-container flex">
					<Col xs={12} sm={12} md={6} lg={6} className="container-center no-padding" style={{height: "100%"}}>
						<div className="snackbar padding-all">
							<b>Create Ticket</b>
              <img onClick={this.close.bind(this)} src="/assets/close-black.svg" className="pointer pull-top pull-right margin-right margin-top"/>
							<Row className="flex margin-top">
								<Col className="container-center" xs={11} sm={10} md={10} lg={10}>
									<Row>
										<Col xs={12} sm={12} md={6} lg={6}>
											<Input label="Min MMR" elementId="min_mmr"/>
										</Col>
										<Col xs={12} sm={12} md={6} lg={6}>
											<Input label="Max MMR" elementId="max_mmr"/>
										</Col>
									</Row>
									<Row>
										<Col xs={12} sm={12} md={6} lg={6}>
											<Input label="Price" elementId="price"/>
										</Col>
										<Col xs={12} sm={12} md={6} lg={6}>
											<Input label="Day used" elementId="day_used"/>
										</Col>
									</Row>
								</Col>
							</Row>
						</div>
					</Col>
				</div>
			</div>
		);
	}
}

cc.register('components.createTicket.snackbar', SnackBar);
