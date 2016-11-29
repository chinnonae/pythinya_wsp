import {Card, Divider} from 'material-ui';
const CardPanel = (props) => {
  return (
    <Card className={this.props.className + " black-secondary"}>
      <h3>{props.title}</h3>
      <Divider />
      {
        props.children
      }
    </Card>
  );
};

cc.register('components.cardPanel', CardPanel);
