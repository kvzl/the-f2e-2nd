[@react.component]
let make = (~title, ~children) => {
  <div className="info-page">
    <div className="info-page__title">
      <div className="container"> <h3> {React.string(title)} </h3> </div>
    </div>
    <div className="info-page__content container"> children </div>
  </div>;
};
