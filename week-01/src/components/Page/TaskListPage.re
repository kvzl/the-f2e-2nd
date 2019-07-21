open Type;

type state = {
  activeTab: int,
  tasks: array(task),
  activeTask: option(int),
  editing: bool,
};

let state = {
  activeTab: 0,
  tasks: Fake.tasks,
  activeTask: Some(0),
  editing: false,
};

type action =
  | SetActiveTab(int)
  | SetActiveTask(option(int))
  | SetEditing(bool);

let reducer = (state, action) =>
  switch (action) {
  | SetActiveTab(activeTab) => {...state, activeTab}
  | SetActiveTask(activeTask) => {...state, activeTask}
  | SetEditing(editing) => {...state, editing}
  };

[@react.component]
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, state);

  let onTaskClick = index =>
    switch (state.activeTask) {
    | None =>
      SetActiveTask(Some(index)) |> dispatch;
      SetEditing(true) |> dispatch;
    | Some(activeTask) =>
      if (activeTask == index) {
        SetEditing(!state.editing) |> dispatch;
      } else {
        SetActiveTask(Some(index)) |> dispatch;
        SetEditing(true) |> dispatch;
      }
    };

  let onTabClick = index => {
    SetActiveTab(index) |> dispatch;
    SetEditing(false) |> dispatch;
  };

  let tabs =
    [|Todo, Done|]
    ->Belt.Array.mapWithIndex((index, status) => {
        let name =
          switch (status) {
          | Todo => "To do"
          | Done => "Done"
          };

        <Tabs.Tab
          key={string_of_int(index)}
          name
          active={state.activeTab == index}
          onClick={() => onTabClick(index)}
        />;
      })
    ->React.array;

  let tasks =
    switch (state.activeTab) {
    | 0 => state.tasks->Belt.Array.keep(task => task.status == Todo)
    | 1 => state.tasks->Belt.Array.keep(task => task.status == Done)
    | _ => [||]
    };

  <div className="task-list-page">
    tabs
    <Tabs.TabContent>
      <TaskList
        tasks
        activeTask={state.activeTask}
        editing={state.editing}
        onTaskClick
      />
    </Tabs.TabContent>
  </div>;
};
