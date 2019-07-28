module Main exposing (main)

import Css exposing (..)
import FreeCell exposing (container, freeCell, topBar)
import Html.Styled exposing (Html, toUnstyled)
import Html.Styled.Attributes exposing (css)


view : Html ()
view =
    freeCell []
        [ container
            [ css [ height (pct 100) ] ]
            [ topBar ]
        ]


main =
    view |> toUnstyled
