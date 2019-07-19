open Utils;

[@react.component]
let make = (~active, ~toggleInfo) => {
  let toggleClass = c([|
    ("info-panel", true),
    ("info-panel--active", active)
  |]);

  <div className=toggleClass>
    <div className="info-panel__navigation">
      <InfoNavigation />
      <InfoToggleButton active toggleInfo />
    </div>
    <div className="info-panel__content" />
  </div>;
};
