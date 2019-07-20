[@react.component]
let make = () => {
  let (name, setName) = React.useState(() => "");
  let (estimated, setEstimated) = React.useState(() => 2);

  <div className="new-task">
    <div className="form-group">
      <label className="label" htmlFor="task-title">
        {React.string("Task title")}
      </label>
      <input
        id="task-title"
        className="input w-100"
        placeholder="e.g. Do homework"
        value=name
        onChange={e => e->ReactEvent.Form.target##value |> setName}
      />
    </div>
    <div className="form-group">
      <label className="label"> {React.string("Estimated tomato")} </label>
      <Tomatos value=estimated max=10 onChange={n => setEstimated(_ => n)} />
    </div>
    <div className="new-task__submit">
      <button className="btn btn--primary w-100">
        {React.string("Add task")}
      </button>
    </div>
  </div>;
};
