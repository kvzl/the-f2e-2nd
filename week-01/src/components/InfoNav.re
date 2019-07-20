open Type;
open Util;

[@react.component]
let make = (~currentInfo, ~switchInfo) => {
  let buttonTypes = [NewTask, TaskList, Report, RingTone];

  let buttons =
    List.map(
      type_ => {
        let (name, icon) =
          switch (type_) {
          | NewTask => ("new", Icon.add)
          | TaskList => ("list", Icon.list)
          | Report => ("report", Icon.analysis)
          | RingTone => ("ringtone", Icon.ringtone)
          };

        let buttonClass =
          c([|
            ("info-nav__button", true),
            ("info-nav__button--" ++ name, true),
            ("info-nav__button--active", currentInfo == type_),
          |]);

        <button className=buttonClass onClick={e => switchInfo(type_)} key=name>
          <img src=icon />
        </button>;
      },
      buttonTypes,
    );

  <div className="info-nav"> {React.array(Array.of_list(buttons))} </div>;
};
