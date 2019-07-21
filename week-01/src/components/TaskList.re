open Util;
open Type;

module Task = {
  [@react.component]
  let make =
      (~task: task, ~active: bool, ~editing: bool, ~onClick: unit => unit) => {
    let taskClassName =
      c([|
        ("task", true),
        ("task--active", active),
        ("task--editing", editing),
      |]);

    let (title, setTitle) = React.useState(() => task.title);
    let (estimated, setEstimated) = React.useState(() => task.estimated);

    <div className=taskClassName>
      <div className="task__title-bar" onClick={e => onClick()}>
        <div className="task__tomato"> <img src=Icon.tomato /> </div>
        <div className="task__summary">
          <span className="task__title"> {React.string(task.title)} </span>
          <TaskProgress
            sm=true
            estimated={task.estimated}
            finished={task.finished}
          />
        </div>
        <div className="task__edit"> <Icon.Dots vertical=editing /> </div>
      </div>
      <div className="task__content">
        <TaskForm sm=true title setTitle estimated setEstimated />
        <div className="task__actions">
          <button className="task__archive btn btn--sm btn--secondary">
            {React.string("Archive")}
          </button>
          <button className="task__save btn btn--sm btn--primary">
            {React.string("save")}
          </button>
        </div>
      </div>
    </div>;
  };
};

[@react.component]
let make =
    (
      ~tasks: array(task),
      ~activeTask: option(int),
      ~editing: bool,
      ~onTaskClick: int => unit,
    ) => {
  let taskElms =
    tasks->Belt.Array.mapWithIndex((index, task) => {
      let active =
        switch (activeTask) {
        | Some(n) => n == index
        | None => false
        };
      let editing = active && editing;
      let onClick = () => onTaskClick(index);

      <Task key={string_of_int(index)} task active editing onClick />;
    });

  <div className="task-list"> {taskElms |> React.array} </div>;
};
