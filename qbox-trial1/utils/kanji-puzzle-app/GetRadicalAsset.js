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
        case "TurtleQuang":
            radicalAsset = require(RADICALS_DIRECTORY+"TurtleQuang.png")
            break;
        case "ichi":
            radicalAsset = require(RADICALS_DIRECTORY+"ichi.png");
            break;
        case "dai":
            radicalAsset = require(RADICALS_DIRECTORY+"dai.png");
            break;
    }

    return radicalAsset;
}