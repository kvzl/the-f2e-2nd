[%raw {|require('./styles/app.scss')|}]

module App = {
  [@react.component]
  let make = () => {
    <div className="app" />;
  };
};

ReactDOMRe.renderToElementWithId(<App />, "app");
