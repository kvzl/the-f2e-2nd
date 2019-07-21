type info =
  | NewTask
  | TaskList
  | Report
  | RingTone;

type taskStatus =
  | Todo
  | Done;

type task = {
  title: string,
  finished: int,
  estimated: int,
  status: taskStatus,
};
