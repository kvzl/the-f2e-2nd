open Utils;

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
    <div className="pomodoro__main">
      <div className="pomodoro__clock"> <ClockPanel /> </div>
      <div className="pomodoro__info"> <InfoPanel /> </div>
    </div>
    <div
      className={c([
        ("pomodoro__toggle", true),
        ("pomodoro__toggle--active", state.showInfo),
      ])}>
      <ToggleInfo toggleInfo={() => dispatch(ToggleInfo)} />
    </div>
  </div>;
};
