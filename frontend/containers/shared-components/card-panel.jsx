import {Card, Divider} from 'material-ui';
const CardPanel = (props) => {
  return (
    <Card className={props.className + " black-secondary"}>
      <h4 className="no-margin white-text padding-top padding-left">{props.title}</h4>
      <Divider className="margin-top" />
      {
        props.children
      }
    </Card>
  );
};

cc.register('components.cardPanel', CardPanel);
