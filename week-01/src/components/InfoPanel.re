open Util;
open Type;

type state = {
  currentInfo: info,
  showInfo: bool,
};

let state = {currentInfo: NewTask, showInfo: false};

type action =
  | ToggleInfo
  | SetShowInfo(bool)
  | SwitchInfo(info);

let reducer = (state, action) =>
  switch (action) {
  | ToggleInfo => {...state, showInfo: !state.showInfo}
  | SetShowInfo(showInfo) => {...state, showInfo}
  | SwitchInfo(info) => {...state, currentInfo: info}
  };

[@react.component]
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, state);

  let toggleClass =
    c([|("info-panel", true), ("info-panel--active", state.showInfo)|]);

  let switchInfo = info => {
    SwitchInfo(info) |> dispatch;
    SetShowInfo(true) |> dispatch;
  };

  <div className=toggleClass>
    <div className="info-panel__navigation">
      <InfoNav currentInfo={state.currentInfo} switchInfo />
      <InfoToggleButton
        active={state.showInfo}
        toggleInfo={() => ToggleInfo |> dispatch}
      />
    </div>
    <div className="info-panel__content">
      {switch (state.currentInfo) {
       | NewTask => <NewTaskPage />
       | TaskList => <TaskListPage />
       | Report => <ReportPage />
       | RingTone => <RingTonePage />
       }}
    </div>
  </div>;
};
