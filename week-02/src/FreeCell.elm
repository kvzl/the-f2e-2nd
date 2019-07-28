module FreeCell exposing (container, freeCell, topBar)

import Card exposing (cardCell, suitCard)
import Colors
import Css exposing (..)
import Html
import Html.Styled exposing (Attribute, Html, div, img, span, styled, text)
import Html.Styled.Attributes exposing (css, src)
import King exposing (king)
import Path exposing (assetsPath)
import Styles exposing (bordered, flexCenter)


topBar : Html ()
topBar =
    div
        [ css
            [ displayFlex
            , justifyContent spaceBetween
            ]
        ]
        [ cardCell [ css [ bordered ] ] []
        , cardCell [ css [ bordered ] ] []
        , cardCell [ css [ bordered ] ] []
        , cardCell [ css [ bordered ] ] []
        , king
        , cardCell [] [ suitCard "S" ]
        , cardCell [] [ suitCard "H" ]
        , cardCell [] [ suitCard "D" ]
        , cardCell [] [ suitCard "C" ]
        ]


container =
    styled div
        [ width (px 970)
        , margin2 (px 0) auto
        ]


freeCell =
    styled div
        [ width (vw 100)
        , height (vh 100)
        , paddingTop (px 50)
        , backgroundColor Colors.gray1
        ]
