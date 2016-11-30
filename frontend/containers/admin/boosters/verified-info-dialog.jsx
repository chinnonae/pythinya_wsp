import {Dialog, FlatButton} from 'material-ui';
import {Row, Col} from 'react-bootstrap';
class InfoDialog extends React.Component {
  render() {
    let user = this.props.user;
    return (
      <Dialog actionsContainerClassName="black-primary" titleClassName="black-primary white-text" bodyClassName="black-primary" title="Booster information" open={this.props.open} onRequestClose={this.props.onClose.bind(this,false,{})}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="flex flex-center">
              <div style={{display: "table"}}>
                <Row className="flex">
                  <b><p style={{width: 70, textAlign: "right"}}>Name</p></b>
                  <p className="no-margin padding-left">{user.name}</p>
                </Row>
                <Row className="flex">
                  <b><p style={{width: 70, textAlign: "right"}}>Telephone</p></b>
                  <p className="no-margin padding-left">{user.telephone}</p>
                </Row>
                <Row className="flex">
                  <b><p style={{width: 70, textAlign: "right"}}>E-mail</p></b>
                  <p className="no-margin padding-left">{user.email}</p>
                </Row>
                <Row className="flex">
                  <b><p style={{width: 70, textAlign: "right"}}>MMR</p></b>
                  <p className="no-margin padding-left">{user.current_mmr}</p>
                </Row>
                <Row className="flex">
                  <b><p style={{width: 70, textAlign: "right"}}>Steam ID</p></b>
                  <p className="no-margin padding-left">{user.steam_id}</p>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Dialog>
    );
  }
}

cc.register('components.admin.boosters.verifiedInfoDialog', InfoDialog);
