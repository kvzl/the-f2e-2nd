let bgImage = url =>
  ReactDOMRe.Style.make(~backgroundImage="url(" ++ url ++ ")", ());

module Control = {
  [@react.component]
  let make = params => <div className="component-class" />;
};

[@react.component]
let make = () =>
  <div className="timer-panel">
    <div className="timer-panel__title">
      {React.string("My First Task")}
    </div>
    <div className="timer-panel__progress">
      <TaskProgress finished=0 estimated=4 />
    </div>
    <div className="timer-panel__timer">
      <div className="timer">
        <span className="timer__countdown"> {React.string("25:00")} </span>
      </div>
    </div>
    <div className="timer-panel__control">
      <button
        className="control control--start"
        style={bgImage(Icon.start)}
      />
      <button
        className="control control--pause"
        style={bgImage(Icon.pauseGray)}
      />
      <button
        className="control control--reset"
        style={bgImage(Icon.resetGray)}
      />
    </div>
    <div className="timer-panel__complete">
      <img src=Icon.complete />
      {React.string("Task complete")}
    </div>
    <div className="timer-panel__mark"> {React.string("POMODORO")} </div>
  </div>;
