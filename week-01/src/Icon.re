let tomato = [%raw {|require('./assets/icons/tomato_small_color.svg')|}];

let tomatoGray = [%raw {|require('./assets/icons/tomato_small_gray.svg')|}];

let arrow = [%raw {|require('./assets/icons/arrow.svg')|}];

let add = [%raw {|require('./assets/icons/add_red.svg')|}];

let list = [%raw {|require('./assets/icons/list_red.svg')|}];

let analysis = [%raw {|require('./assets/icons/analysis_red.svg')|}];

let ringtone = [%raw {|require('./assets/icons/ringtone_red.svg')|}];

let start = [%raw {|require('./assets/icons/start_red.svg')|}];

let startGray = [%raw {|require('./assets/icons/start_gray.svg')|}];

let pause = [%raw {|require('./assets/icons/pause_red.svg')|}];

let pauseGray = [%raw {|require('./assets/icons/pause_gray.svg')|}];

let reset = [%raw {|require('./assets/icons/reset_red.svg')|}];

let resetGray = [%raw {|require('./assets/icons/reset_gray.svg')|}];

let complete = [%raw {|require('./assets/icons/complete.svg')|}];

module Dots = {
  [@react.component]
  let make = (~vertical) =>
    <div className="icon-dots">
      <div className="icon-dots__wrap">
        <span
          className={vertical ? "more-vertical-solid icon" : "more-solid icon"}
        />
      </div>
    </div>;
};
