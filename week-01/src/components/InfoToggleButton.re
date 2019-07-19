open Utils;

[@react.component]
let make = (~active, ~toggleInfo) => {
  let arrowClass = c([|
    ("info-toggle-button__arrow", true),
    ("flip-h", active),
  |]);

  <button className="info-toggle-button" onClick={(evt_) => toggleInfo()}>
    <img className="info-toggle-button__tomato" src=Icon.tomato />
    <img className=arrowClass src=Icon.arrow />
  </button>;
};
