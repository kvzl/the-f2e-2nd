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

let rec range = (start, end_) =>
  start >= end_ ? [] : [start, ...range(start + 1, end_)];
