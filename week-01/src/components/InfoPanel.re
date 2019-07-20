open Util;
open Type;

type state = {
  currentInfo: info,
  showInfo: bool,
};

let state = {currentInfo: NewTask, showInfo: false};

type action =
  | ToggleInfo
  | SwitchInfo(info);

let reducer = (state, action) =>
  switch (action) {
  | ToggleInfo => {...state, showInfo: !state.showInfo}
  | SwitchInfo(info) => {...state, currentInfo: info}
  };

[@react.component]
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, state);

  let toggleClass =
    c([|("info-panel", true), ("info-panel--active", state.showInfo)|]);

  <div className=toggleClass>
    <div className="info-panel__navigation">
      <InfoNav
        currentInfo={state.currentInfo}
        switchInfo={type_ => SwitchInfo(type_) |> dispatch}
      />
      <InfoToggleButton
        active={state.showInfo}
        toggleInfo={() => ToggleInfo |> dispatch}
      />
    </div>
    <div className="info-panel__content" />
  </div>;
};
