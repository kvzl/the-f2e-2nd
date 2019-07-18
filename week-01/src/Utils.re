let c = cls =>
  cls
  |> List.filter(((_, value)) => value == true)
  |> List.map(((prop, _)) => prop)
  |> List.fold_left(
       (class_, prop) => class_ == "" ? prop : class_ ++ " " ++ prop,
       "",
     );
