module Main exposing (main)

import Html exposing (Html, div, text, img)
import Html.Attributes exposing (class, src)

assetsPath : String
assetsPath = "assets/"

getPokerUrl : String -> String
getPokerUrl name =
  let
    pokerPath = assetsPath ++ "cards_background/"
  in
  pokerPath ++ name ++ ".png"

king : Html ()
king =
  div
    [ class "king" ] [
      img [ src <| assetsPath ++ "/king_joy.png" ] []
    ]

poker : Html ()
poker =
  div
    [ class "poker" ] [
      img [ src <| getPokerUrl "S3" ] [],
      king,
      img [ src <| getPokerUrl "S5" ] []
    ]


view : Html ()
view =
  div
    [ class "free-cell" ] [
      div [ class "free-cell__top" ] [
        poker
      ],
      div [ class "free-cell__main" ] [
        text "main"
      ],
      div [ class "free-cell__bottom" ] [
        text "bottom"
      ]
    ]

main : Html ()
main = view


