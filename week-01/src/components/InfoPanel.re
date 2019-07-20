open Util;
open Type;

type state = {
  currentInfo: info,
  showInfo: bool,
};

let state = {currentInfo: NewTask, showInfo: true};

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


module InfoToggleButton = {
  [@react.component]
  let make = (~active, ~toggleInfo) => {
    let arrowClass =
      c([|("info-toggle-button__arrow", true), ("flip-h", !active)|]);

    <button className="info-toggle-button" onClick={evt_ => toggleInfo()}>
      <img className="info-toggle-button__tomato" src=Icon.tomato />
      <img className=arrowClass src=Icon.arrow />
    </button>;
  };
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

  let (title, content) =
    switch (state.currentInfo) {
    | NewTask => ("Add new task", <NewTaskPage />)
    | TaskList => ("Task list", <TaskListPage />)
    | Report => ("Analytics Report", <ReportPage />)
    | RingTone => ("Ring Tone", <RingTonePage />)
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
      <InfoPage title> content </InfoPage>
    </div>
  </div>;
};
