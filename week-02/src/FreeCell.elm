module FreeCell exposing (freeCell, tableau, tableaux, topBar)

import Card exposing (card, cardCell, suitCard)
import Colors
import Css exposing (..)
import Data.Card exposing (Card)
import Html
import Html.Styled exposing (Attribute, Html, div, img, span, styled, text)
import Html.Styled.Attributes exposing (class, css, src)
import King exposing (king)
import List.Extra exposing (getAt)
import Path exposing (assetsPath, getPokerUrl)
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


tableau : List Card -> Html ()
tableau cards =
    let
        showCard ( suit, number ) =
            cardCell []
                [ card [ src <| getPokerUrl <| suit ++ String.fromInt number ] []
                ]

        len =
            List.length cards

        loop i =
            if i == len then
                div [] []

            else
                case getAt i cards of
                    Nothing ->
                        div [] []

                    Just card ->
                        div [ css [ position absolute, top (px 25), left (px 0) ] ] [ showCard card, loop (i + 1) ]
    in
    div [ css [ position relative, width (px 95) ] ] [ loop 0 ]


tableaux =
    styled div
        [ displayFlex
        , flexDirection row
        , justifyContent spaceBetween
        ]


freeCell =
    styled div
        [ width (vw 100)
        , height (vh 100)
        , paddingTop (px 50)
        , backgroundColor Colors.gray1
        ]
