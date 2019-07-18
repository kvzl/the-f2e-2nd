[@react.component]
let make = (~toggleInfo) => {
  let onClick = (evt_) => {
    toggleInfo();
  };

  <div className="toggle-info">
    <button onClick={onClick}>
      {React.string("Toggle")}
    </button>
  </div>
};
