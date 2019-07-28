module Card exposing (card, cardCell, suitCard)

import Colors
import Css exposing (..)
import Html.Styled exposing (Attribute, Html, div, img, styled)
import Html.Styled.Attributes exposing (css, src)
import Path exposing (getSuitUrl)
import Styles exposing (flexCenter)


cardCell : List (Attribute msg) -> List (Html msg) -> Html msg
cardCell =
    styled div
        [ width (px 95)
        , height (px 145)
        , borderRadius (px 5)
        , flexCenter
        , overflow hidden
        ]


card : List (Attribute msg) -> List (Html msg) -> Html msg
card =
    styled img
        [ width (pct 100)
        ]


suitCard name =
    div
        [ css
            [ backgroundColor Colors.light
            , width (pct 100)
            , height (pct 100)
            , flexCenter
            ]
        ]
        [ img
            [ src <| getSuitUrl name
            , css
                [ width (px 35)
                , height (px 35)
                ]
            ]
            []
        ]
