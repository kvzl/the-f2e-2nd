open Utils;

[@react.component]
let make = (~show, ~toggleInfo) => {
  let toggleClass = c([|
    ("info-panel", true),
    ("info-panel--active", show)
  |]);

  <div className=toggleClass>
    <div className="info-panel__navigation">
      <div className="info-panel__toggle"> <ToggleInfo toggleInfo /> </div>
    </div>
    <div className="info-panel__content" />
  </div>;
};
