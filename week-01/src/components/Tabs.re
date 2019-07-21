open Util;

module Tab = {
  [@react.component]
  let make = (~name, ~active, ~onClick) => {
    let className = c([|("tab", true), ("tab--active", active)|]);

    <button className onClick={e => onClick()}> <span> {React.string(name)} </span> </button>;
  };
};

module TabContent = {
  [@react.component]
  let make = (~children) => <div className="tab-content"> children </div>;
};

[@react.component]
let make = (~children) => <div className="tabs"> children </div>;
