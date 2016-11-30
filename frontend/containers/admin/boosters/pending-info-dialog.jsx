import {Dialog, FlatButton} from 'material-ui';
import {Row, Col} from 'react-bootstrap';
let actions = cc.get('redux.actions');
class InfoDialog extends React.Component {
  approve(user) {
    let adminService = cc.get('services.admin');
    adminService.approveBooster(user,this.props.actions.pendingBoosterAction);
  }
  deny(user) {
    let adminService = cc.get('services.admin');
    adminService.denyBooster(user,this.props.actions.pendingBoosterAction);
  }
  render() {
    let user = this.props.user;
    return (
      <Dialog actionsContainerClassName="black-primary" titleClassName="black-primary white-text" bodyClassName="black-primary" title="Booster information" open={this.props.open} onRequestClose={this.props.onClose.bind(this,false,{})}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
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
        <div className="flex flex-reverse" >
          <FlatButton onTouchTap={this.approve.bind(this,user)} label="Approve" className="success white-text" style={{marginLeft: 10}}/>
          <FlatButton onTouchTap={this.deny.bind(this,user)} label="Deny" className="error white-text"/>
        </div>
      </Dialog>
    );
  }
}

cc.register('components.admin.boosters.pendingInfoDialog', connect(mapStateToProps, mapDispatchToProps(actions))(InfoDialog));
