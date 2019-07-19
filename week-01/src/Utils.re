let concat = Js.Array.concat;

let c = cls =>
  cls
  |> Js.Array.reduce(
       (result, p) => {
         let (prop, value) = p;
         value == true ? concat([|prop|], result) : result;
       },
       [||],
     )
  |> Js.Array.joinWith(" ");
