export function getRadicalAsset (radical) {
    let radicalAsset;
    const RADICALS_DIRECTORY = "../../assets/kanji-radicals/";

    switch (radical){
        case "kokoro":
            radicalAsset = require(RADICALS_DIRECTORY+"kokoro.png")
            break;
        case "takekanmuri":
            radicalAsset = require(RADICALS_DIRECTORY+"takekanmuri.png")
            break;
        case "ichi":
            radicalAsset = require(RADICALS_DIRECTORY+"ichi.png");
            break;
        case "dai":
            radicalAsset = require(RADICALS_DIRECTORY+"dai.png");
            break;
        case "shinnyou":
            radicalAsset = require(RADICALS_DIRECTORY+"dai.png");
            break;
        case "madare":
            radicalAsset = require(RADICALS_DIRECTORY+"madare.png");
            break;
        case "kakushigamae":
            radicalAsset = require(RADICALS_DIRECTORY+"kakushigamae.png");
            break;
        case "mongamae":
            radicalAsset = require(RADICALS_DIRECTORY+"mongamae.png");
            break;
        case "magarigawa":
            radicalAsset = require(RADICALS_DIRECTORY+"magarigawa.png");
            break;
        case "takumi":
            radicalAsset = require(RADICALS_DIRECTORY+"takumi.png");
            break;
        case "TurtleQuang":
            radicalAsset = require(RADICALS_DIRECTORY+"TurtleQuang.png")
            break;
    }

    return radicalAsset;
}