open Util;

[@react.component]
let make = (~active, ~currentInfo, ~toggleInfo, ~switchInfo) => {
  let toggleClass = c([|
    ("info-panel", true),
    ("info-panel--active", active)
  |]);

  <div className=toggleClass>
    <div className="info-panel__navigation">
      <InfoNav currentInfo switchInfo/>
      <InfoToggleButton active toggleInfo />
    </div>
    <div className="info-panel__content" />
  </div>;
};
