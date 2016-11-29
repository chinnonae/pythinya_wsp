import {Card, Divider} from 'material-ui';
const CardPanel = (props) => {
  return (
    <Card className={props.className + " black-secondary padding-all"}>
      <h4 className="no-margin white-text">{props.title}</h4>
      <Divider className="margin-top" />
      {
        props.children
      }
    </Card>
  );
};

cc.register('components.cardPanel', CardPanel);
