module Main exposing (main)

import Colors
import Css exposing (..)
import FreeCell exposing (assetsPath)
import Html
import Html.Styled exposing (Attribute, Html, div, img, span, styled, text, toUnstyled)
import Html.Styled.Attributes exposing (class, css, src)


getPokerUrl : String -> String
getPokerUrl name =
    let
        pokerPath =
            assetsPath ++ "cards_background/"
    in
    pokerPath ++ name ++ ".png"


getSuitUrl : String -> String
getSuitUrl name =
    assetsPath ++ name ++ ".png"


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
    cell []
        [ img [ src <| assetsPath ++ "/king_happy.png", css [ width (px 50) ] ] []
        , logoText [] [ text "FreeCell" ]
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

cell : List (Attribute msg) -> List (Html msg) -> Html msg
cell =
    styled div
        [ width (px 95)
        , height (px 145)
        , borderRadius (px 5)
        , flexCenter
        , overflow hidden
        ]


top : Html ()
top =
    div
        [ css
            [ displayFlex
            , justifyContent spaceBetween
            ]
        ]
        [ cell [ css [ bordered ] ] []
        , cell [ css [ bordered ] ] []
        , cell [ css [ bordered ] ] []
        , cell [ css [ bordered ] ] []
        , king
        , cell [] [ suitCard "S" ]
        , cell [] [ suitCard "H" ]
        , cell [] [ suitCard "D" ]
        , cell [] [ suitCard "C" ]
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


view : Html ()
view =
    freeCell []
        [ container
            [ css [ height (pct 100) ] ]
            [ top ]
        ]


main =
    view |> toUnstyled
