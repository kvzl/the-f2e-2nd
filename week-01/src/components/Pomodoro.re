type info =
  | NewTask
  | TaskList
  | Report
  | RingTone;

type state = {
  currentInfo: info,
  showInfo: bool,
};

type action =
  | ToggleInfo
  | SwitchInfo(info);

let reducer = (state, action) =>
  switch (action) {
  | ToggleInfo => {...state, showInfo: !state.showInfo}
  | SwitchInfo(info) => {...state, currentInfo: info}
  };

let state = {currentInfo: NewTask, showInfo: false};

[@react.component]
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, state);

  <div className="pomodoro">
    <div className="pomodoro__clock"> <ClockPanel /> </div>
    <div className="pomodoro__info">
      <InfoPanel
        active={state.showInfo}
        toggleInfo={() => dispatch(ToggleInfo)}
      />
    </div>
  </div>;
};
