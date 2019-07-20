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
