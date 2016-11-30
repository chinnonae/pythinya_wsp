import {Card, Divider} from 'material-ui';
const CardPanel = (props) => {
  return (
    <Card containerStyle={{height: "100%", display: 'flex', flexDirection: 'column'}} className={props.className + " black-secondary flex-mobile"} style={props.style}>
      <h4 className="no-margin white-text padding-top padding-left">{props.title}</h4>
      <Divider className="margin-top" />
      {
        props.children
      }
    </Card>
  );
};

cc.register('components.cardPanel', CardPanel);
