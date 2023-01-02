import React from 'react';
import {Image, ImageBackground, Text, View} from "react-native";
import {getFittingImageSizes} from "../../../utils/GetFittingImageSizes";
import {getRadicalAsset} from "../../../utils/kanji-puzzle-app/GetRadicalAsset";

const KanmuriSquareBox = (props) => {
    const edgeWidth = props.edgeWidth;

    const height = edgeWidth==null?props.height:edgeWidth;
    const width = edgeWidth==null?props.width:edgeWidth;


    const topRatio = props.topRatio;
    const radical = props.radical;
    const radicalScale = props.radicalScale;
    const bgRadical = props.bgRadical == null ? "#84CC16" : props.bgRadical;
    const anotherRadical = props.anotherRadical;
    const anotherRadicalScale = props.anotherRadicalScale;
    const bgAnotherRadical = props.bgAnotherRadical == null ? "#3B82F6" : props.bgAnotherRadical;

    const image1 = getRadicalAsset(radical);
    const {'resizedHeight':rh1, 'resizedWidth':rw1} = getFittingImageSizes(
        height*topRatio,
        width,
        Image.resolveAssetSource(image1).height,
        Image.resolveAssetSource(image1).width,
        radicalScale==null?1:radicalScale);

    if(anotherRadical){
        const image2 = getRadicalAsset(anotherRadical)
        const {'resizedHeight':rh2, 'resizedWidth':rw2} = getFittingImageSizes(
            height*(1-topRatio),
            width,
            Image.resolveAssetSource(image2).height,
            Image.resolveAssetSource(image2).width,
            anotherRadicalScale==null?1:anotherRadicalScale);
        return (
            <View className="bg-green-300 flex-col" height={height} width={width}>
                <View height={height*topRatio} width={width} className="items-center justify-center" style={{backgroundColor: bgRadical}}>
                    <Image source={image1} style={{height: rh1, width: rw1}}/>
                </View>
                <View height={height*(1-topRatio)} className="items-center justify-center" style={{backgroundColor: bgAnotherRadical}}>
                    <Image source={image2} style={{height: rh2, width: rw2}}/>
                </View>
            </View>
        );
    }else{
        return (
            <View className="bg-green-300 flex-col" height={height} width={width}>
                <View height={height*topRatio} width={width} className="items-center justify-center" style={{backgroundColor: bgRadical}}>
                    <Image source={image1} style={{height: rh1, width: rw1}}/>
                </View>
                <View height={height*(1-topRatio)} style={{backgroundColor: bgAnotherRadical}}>
                    {props.children}
                </View>
            </View>
        );
    }

};

export default KanmuriSquareBox;