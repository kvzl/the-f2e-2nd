module Main exposing (main)

import Browser
import Css exposing (..)
import Data.Card exposing (Card, cards)
import FreeCell exposing (freeCell, tableau, tableaux, topBar)
import Html.Styled exposing (Html, div, styled, toUnstyled)
import Html.Styled.Attributes exposing (css)
import List exposing (..)
import List.Extra exposing (groupsOfVarying)


type alias Model =
    { cards : List (List Card)
    }


container =
    styled div
        [ width (px 970)
        , margin2 (px 0) auto
        ]


cardGroups : List (List Card)
cardGroups =
    groupsOfVarying [ 7, 7, 7, 7, 6, 6, 6, 6 ] cards


init : Model
init =
    { cards = cardGroups
    }


view : Model -> Html ()
view model =
    freeCell []
        [ container
            [ css [ height (pct 100) ] ]
            [ topBar
            , tableaux [] <| List.map tableau model.cards
            ]
        ]


update : msg -> Model -> Model
update msg model =
    model


main =
    Browser.sandbox
        { view = view >> toUnstyled
        , init = init
        , update = update
        }
