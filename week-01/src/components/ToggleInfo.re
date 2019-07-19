open Utils;

[@react.component]
let make = (~active, ~toggleInfo) => {
  let arrowClass = c([|
    ("toggle-info__arrow", true),
    ("flip-h", active),
  |]);

  <button className="toggle-info" onClick={(evt_) => toggleInfo()}>
    <img className="toggle-info__tomato" src=Icon.tomato />
    <img className=arrowClass src=Icon.arrow />
  </button>;
};
