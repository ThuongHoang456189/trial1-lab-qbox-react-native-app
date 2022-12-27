import React, {useLayoutEffect} from 'react';
import {Dimensions, Image, SafeAreaView, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import QuizContainer from "../../components/quiz-app/QuizContainer";
// import QuestionSlide from "../../components/quiz-app/QuestionSlide";
import TempComp from "../../components/quiz-app/TempComp";
import StackableView from "../../components/kanji-puzzle-app/StackableView";
import KanmuriSquareBox from "../../components/kanji-puzzle-app/radicals/KanmuriSquareBox";
import SquareBox from "../../components/SquareBox";

const { height } = Dimensions.get("window");

const QuizLoadingScreen = () => {
    const navigator = useNavigation();

    useLayoutEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, []);
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
            {/*<SquareBox edgeWidth={200}>*/}
            {/*    <Image className="bg-green-300" source={require('../../assets/kanji-radicals/TurtleQuang.png')} style={{height: 100, width: 100}}/>*/}
            {/*</SquareBox>*/}
        </QuizContainer>
    );
};

export default QuizLoadingScreen;