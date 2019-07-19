open Utils;

[@react.component]
let make = (~active, ~toggleInfo) => {
  let toggleClass = c([|
    ("info-panel", true),
    ("info-panel--active", active)
  |]);

  <div className=toggleClass>
    <div className="info-panel__navigation">
      <div className="info-panel__toggle"> <ToggleInfo active toggleInfo /> </div>
    </div>
    <div className="info-panel__content" />
  </div>;
};
