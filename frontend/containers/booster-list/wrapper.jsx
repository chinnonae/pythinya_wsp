import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, RaisedButton, Divider} from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
var actions = cc.get('redux.actions');
class BoosterList extends React.Component {
  render() {
    /* component*/
    var Input = cc.get('components.input');
    var self = this;
    var BoosterTable = cc.get('components.boosterList.boosterTable');
    /* rendering */
    return (

      <div className="flex flex-center">
        {/* start component top */}
        <Col xs={12} sm={12} md={12} lg={8}>
          <div className="container-center">
            {/* //component top left-side */}
            <Col xs={12} sm={5} md={5} lg={5}>
              <div className="flex flex-center"><h3>Filter by MMR</h3></div>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Input name="start_mmr" label="Start(1500)" elementId="startMMR"></Input>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Input name="end_mmr" label="End(2500)" elementId="endMMR"></Input>
              </Col>
            </Col>
            {/* //component top right-side */}
            <Col xs={12} sm={7} md={7} lg={7}>
              <Col xs={12} sm={8} md={8} lg={9}>
              <div className="flex flex-center"><h3>Filter by Booster name</h3></div>
              </Col>
              <div>
                <Col xs={12} sm={8} md={8} lg={9}>
                  <Input name="booster_name" label="Booster name" elementId="boosterName"></Input>
                </Col>
                <Col xsOffset={4} xs={8} smOffset={0} sm={4} mdOffset={0} md={4} lg={3}>
                  <br></br>
                  <RaisedButton type="submit" label="New Ticket" primary={true}/>
                </Col>
            </div>
            </Col>
          </div>
          {/* //end component top */}
          {/* //start component booster list */}
          <Col xs={12} sm={12} md={12} lg={12}>
            <BoosterTable/>
          </Col>
        </Col>
        {/* end component booster list */}
        <Col xs={0} sm={0} md={0} lg={4}>

        </Col>
        {/* //end component booster list */}
      </div>
    );
  }
}


cc.register('components.booster_list', connect(mapStateToProps)(BoosterList));
