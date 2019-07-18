// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Utils$ReactHooksTemplate = require("../Utils.bs.js");
var InfoPanel$ReactHooksTemplate = require("./InfoPanel.bs.js");
var ClockPanel$ReactHooksTemplate = require("./ClockPanel.bs.js");
var ToggleInfo$ReactHooksTemplate = require("./ToggleInfo.bs.js");

function reducer(state, action) {
  if (action) {
    return /* record */[
            /* currentInfo */action[0],
            /* showInfo */state[/* showInfo */1]
          ];
  } else {
    return /* record */[
            /* currentInfo */state[/* currentInfo */0],
            /* showInfo */!state[/* showInfo */1]
          ];
  }
}

var state = /* record */[
  /* currentInfo : NewTask */0,
  /* showInfo */false
];

function Pomodoro(Props) {
  var match = React.useReducer(reducer, state);
  var dispatch = match[1];
  return React.createElement("div", {
              className: "pomodoro"
            }, React.createElement("div", {
                  className: "pomodoro__main"
                }, React.createElement("div", {
                      className: "pomodoro__clock"
                    }, React.createElement(ClockPanel$ReactHooksTemplate.make, { })), React.createElement("div", {
                      className: "pomodoro__info"
                    }, React.createElement(InfoPanel$ReactHooksTemplate.make, { }))), React.createElement("div", {
                  className: Utils$ReactHooksTemplate.c(/* :: */[
                        /* tuple */[
                          "pomodoro__toggle",
                          true
                        ],
                        /* :: */[
                          /* tuple */[
                            "pomodoro__toggle--active",
                            match[0][/* showInfo */1]
                          ],
                          /* [] */0
                        ]
                      ])
                }, React.createElement(ToggleInfo$ReactHooksTemplate.make, {
                      toggleInfo: (function (param) {
                          return Curry._1(dispatch, /* ToggleInfo */0);
                        })
                    })));
}

var make = Pomodoro;

exports.reducer = reducer;
exports.state = state;
exports.make = make;
/* react Not a pure module */
