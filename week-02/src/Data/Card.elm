module Data.Card exposing (Card, cards, numbers, suits)

import List.Extra exposing (lift2)


type alias Card =
    ( String, Int )


numbers : List Int
numbers =
    List.range 1 13


suits : List String
suits =
    [ "C", "D", "H", "S" ]


cards : List Card
cards =
    lift2 Tuple.pair suits numbers
