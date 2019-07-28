module Path exposing (assetsPath, getPokerUrl, getSuitUrl)


assetsPath : String
assetsPath =
    "assets/"


getPokerUrl : String -> String
getPokerUrl name =
    assetsPath ++ "cards_background/" ++ name ++ ".png"


getSuitUrl : String -> String
getSuitUrl name =
    assetsPath ++ name ++ ".png"
