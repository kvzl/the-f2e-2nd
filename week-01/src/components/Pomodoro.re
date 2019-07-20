[@react.component]
let make = () => {
  <div className="pomodoro">
    <div className="pomodoro__clock"> <ClockPanel /> </div>
    <div className="pomodoro__info"> <InfoPanel /> </div>
  </div>;
};
