module Styles exposing (bordered, flexCenter)

import Colors
import Css exposing (..)


bordered : Style
bordered =
    Css.batch
        [ boxShadow6 inset (px 0) (px 0) (px 0) (px 2) Colors.light
        ]


flexCenter : Style
flexCenter =
    Css.batch
        [ displayFlex
        , flexFlow2 noWrap column
        , justifyContent center
        , alignItems center
        ]
