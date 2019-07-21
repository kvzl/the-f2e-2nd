open Util;
open Icon;

[@react.component]
let make = (~sm=false, ~value, ~max, ~onChange) => {
  let sc = sc(sm);

  let tomatos =
    range(0, max)
    |> List.map(n => {
         let className =
           c([|
             ("tomatos__tomato", true),
             ("tomatos__tomato--active", n < value),
           |]);

         let src = n < value ? Icon.tomato : Icon.tomatoGray;

         <img
           key={string_of_int(n)}
           className
           src
           onClick={e => onChange(n + 1)}
         />;
       })
    |> react_of_list;

  <div className={sc("tomatos")}> tomatos </div>;
};
