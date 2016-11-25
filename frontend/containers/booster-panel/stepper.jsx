// import {Stepper, StepLabel, Step} from 'material-ui';
const CustomStepper = (props) => {
  let Stepper = cc.get('components.stepper');
  let steps = cc.get('boosterStep');
  return (
    <Stepper
      steps={steps}
      size={20}
      circleFontSize={10}
      activeColor={"#F6A623"}
      circleFontColor={"#F6A623"}
      completeColor="#F6A623"
      activeStep={props.activeStep}
      titleFontSize={"1em"}
      completeTitleColor={"white"}
      activeTitleColor={"white"}
      defaultTitleColor={"white"}
      titleTop={23}
    />
  );
};

cc.register('components.boosterPanel.stepper', CustomStepper);
