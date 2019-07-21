let concatElm = elm => Js.Array.concat([|elm|]);

let join = Js.Array.joinWith;

let c = cls =>
  cls
  |> Js.Array.reduce(
       (result, (prop, value)) =>
         value == true ? concatElm(prop, result) : result,
       [||],
     )
  |> join(" ");

let sc = (sm, className) =>
  className ++ (sm ? " " ++ className ++ "--sm" : "");

let rec range = (start, end_) =>
  start >= end_ ? [] : [start, ...range(start + 1, end_)];

let react_of_list = list => list |> Array.of_list |> React.array;
