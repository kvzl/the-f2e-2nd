let concat = Js.Array.concat;

let c = cls =>
  cls
  |> Js.Array.reduce(
    (result, p) => {
      let (prop, value) = p;
      value == true
        ? concat(result, [|prop|])
        : result;
    },
    [||],
  )
  |> Js.Array.joinWith(" ");
