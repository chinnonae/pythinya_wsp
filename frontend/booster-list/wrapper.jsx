import {Col, Grid, Row, Form} from 'react-bootstrap';
var actions = cc.get('redux.actions');
class BoosterList extends React.Component {
  render() {
    /* component*/
    var Input = cc.get('components.input');
    /* rendering */
    return (
      // <Grid className="flex flex-center" style={{height: "calc(100vh - 64px)"}}>
        // <Grid className="padding-all"><h3>Hello</h3></Grid>
      // </Grid>

      <div className="container-center">
        //start component top
        <Col xs={7} sm={7} md={7} lg={7}>
          <div className="container-center">
            //component top left-side
            <Col xs={5} sm={5} md={5} lg={5}>
              <div><h3>Filter by MMR</h3></div>
              <div>
                <Input name="start_mmr" label="Start(1500)" elementId="startMMR"></Input>
                <Input name="end_mmr" label="End(2500)" elementId="endMMR"></Input>
              </div>

            </Col>
            //component top right-side
            <Col xs={7} sm={7} md={7} lg={7}>

            </Col>
          </div>
        </Col>
        //end component top
        //start component booster list
        <Col xs={5} sm={5} md={5} lg={5}>

        </Col>
        //end component booster list
      </div>
    );
  }
}


cc.register('components.booster_list', connect(mapStateToProps)(BoosterList));
