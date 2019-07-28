module King exposing (king, logoText)

import Css exposing (..)
import Html.Styled exposing (Attribute, Html, img, span, styled, text)
import Html.Styled.Attributes exposing (src, css)
import Card exposing (cardCell)
import Path exposing (assetsPath)


logoText : List (Attribute msg) -> List (Html msg) -> Html msg
logoText =
    styled span
        [ marginTop (px 5)
        , textTransform uppercase
        , fontSize (px 14)
        , fontWeight bold
        ]


king : Html ()
king =
    cardCell []
        [ img [ src <| assetsPath ++ "/king_happy.png", css [ width (px 50) ] ] []
        , logoText [] [ text "FreeCell" ]
        ]
