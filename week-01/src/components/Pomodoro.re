[@react.component]
let make = () => {
  <div className="pomodoro">
    <div className="pomodoro__timer"> <TimerPanel /> </div>
    <div className="pomodoro__info"> <InfoPanel /> </div>
  </div>;
};
