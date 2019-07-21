[@react.component]
let make = () => {
  let (title, setTitle) = React.useState(() => "");
  let (estimated, setEstimated) = React.useState(() => 2);

  <div className="new-task">
    <TaskForm title setTitle estimated setEstimated />
    <div className="new-task__submit">
      <button className="btn btn--primary w-100">
        {React.string("Add task")}
      </button>
    </div>
  </div>;
};
