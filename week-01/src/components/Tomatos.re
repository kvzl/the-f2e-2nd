open Util;
open Icon;

[@react.component]
let make = (~value, ~max, ~onChange) => {
  let tomatos =
    List.map(
      n => {
        let className =
          c([|
            ("tomatos__tomato", true),
            ("tomatos__tomato--active", n < value),
          |]);

        let src = n < value ? Icon.tomato : Icon.tomatoGray;

        <img className src onClick={e => onChange(n + 1)} />;
      },
      range(0, max),
    )
    |> Array.of_list
    |> React.array;

  <div className="tomatos"> tomatos </div>;
};
