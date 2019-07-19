let concatElm = elm => Js.Array.concat([|elm|]);

let c = cls =>
  cls
  |> Js.Array.reduce(
       (result, (prop, value)) =>
         value == true ? concatElm(prop, result) : result,
       [||],
     )
  |> Js.Array.joinWith(" ");
