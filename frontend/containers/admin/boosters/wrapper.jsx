import {Card} from 'material-ui';
class Wrapper extends React.Component {
  render() {
    let BoostersTable = cc.get('components.admin.boosters.boostersTable');
    return (
      <div className="padding-all">
        <Card className="black-secondary padding-all">
          <div className="flex flex-middle">
            <img width={15} src="/assets/menu.svg"/>
            <p className="no-margin padding-left">Boosters</p>
          </div>
          <BoostersTable />
        </Card>
      </div>
    );
  }
}

cc.register('components.admin.boosters.wrapper', Wrapper);
