[%raw {|require('./styles/app.scss')|}]

module App = {
  [@react.component]
  let make = () => {
    <div className="app">
      <Pomodoro />
    </div>;
  };
};

ReactDOMRe.renderToElementWithId(<App />, "app");
