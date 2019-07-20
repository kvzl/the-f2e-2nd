[@react.component]
let make = (~title, ~children) => {
  <div className="info-page">
    <div className="info-page__title"> <h3> {React.string(title)} </h3> </div>
    <div className="info-page__content"> children </div>
  </div>;
};
