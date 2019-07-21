open Util;

[@react.component]
let make = (~sm=false, ~estimated: int, ~finished: int) => {
  let sc = sc(sm);

  let dots =
    List.map(n => {
      let className =
        c([|
          ("task-progress__dot", true),
          ("task-progress__dot--finished", n < finished),
        |]);

      <div key={string_of_int(n)} className />;
    });

  <div className={sc("task-progress")}>
    {range(0, estimated) |> dots |> react_of_list}
  </div>;
};
