import React, {useLayoutEffect} from 'react';
import {Dimensions, Image, SafeAreaView, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import QuizContainer from "../../components/quiz-app/QuizContainer";
// import QuestionSlide from "../../components/quiz-app/QuestionSlide";
import TempComp from "../../components/quiz-app/TempComp";
import StackableView from "../../components/kanji-puzzle-app/StackableView";
import KanmuriSquareBox from "../../components/kanji-puzzle-app/radicals/KanmuriSquareBox";
import {getFittingImageSizes} from "../../utils/GetFittingImageSizes";

const { height } = Dimensions.get("window");

const QuizLoadingScreen = () => {
    const navigator = useNavigation();

    useLayoutEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, []);

    const image = require('qbox-trial1/assets/kanji-radicals/shinnyou.png');
    const edgeWidth = 200;

    const {'resizedHeight':rh, 'resizedWidth':rw} = getFittingImageSizes(
        edgeWidth,
        edgeWidth,
        Image.resolveAssetSource(image).height,
        Image.resolveAssetSource(image).width,1);

    return (
        <QuizContainer navigator={navigator}>
            <View height={100}>
                <Text>Lalala</Text>
            </View>
            <KanmuriSquareBox edgeWidth={200} topRatio={0.35} radical={"takekanmuri"} bgRadical={"#C026D3"}>
                <View height={0.65*200} width={200} className="items-center justify-center">
                    <KanmuriSquareBox edgeWidth={0.65*200} topRatio={0.1} radical={"ichi"} radicalScale={0.9} anotherRadical={"dai"}/>
                </View>
            </KanmuriSquareBox>
            <View height={100}>
                <Text>Lalala</Text>
            </View>
            <View height={200} width={200} className="flex-row-reverse bg-blue-300">
                <View height={148} width={140} className="absolute object-none bg-yellow-400">

                </View>
                <Image source={image} style={{height: rh, width: rw}}/>
            </View>
        </QuizContainer>
    );
};

export default QuizLoadingScreen;