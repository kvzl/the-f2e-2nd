open Util;

[@react.component]
let make = (~sm=false, ~title, ~setTitle, ~estimated, ~setEstimated) => {
  let sc = sc(sm);

  <div className="task-form">
    <div className={sc("form-group")}>
      <label className={sc("label")} htmlFor="task-title">
        {React.string("Task title")}
      </label>
      <input
        id="task-title"
        className={"w-100 " ++ sc("input")}
        placeholder="e.g. Do homework"
        value=title
        onChange={e => e->ReactEvent.Form.target##value |> setTitle}
      />
    </div>
    <div className={sc("form-group")}>
      <label className={sc("label")}>
        {React.string("Estimated tomato")}
      </label>
      <Tomatos
        sm
        value=estimated
        max=10
        onChange={n => setEstimated(_ => n)}
      />
    </div>
  </div>;
};
