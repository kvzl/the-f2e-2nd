[%raw {|require('./styles/app.scss')|}]

[@react.component]
let make = () => {
  <div className="app">
    <h2>{ReasonReact.string("App")}</h2>
  </div>;
};
