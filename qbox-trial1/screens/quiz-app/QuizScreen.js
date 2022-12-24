import React, {useLayoutEffect} from 'react';
import {Dimensions, Image, SafeAreaView, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import QuizContainer from "../../components/quiz-app/QuizContainer";
import QuestionSlide from "../../components/quiz-app/QuestionSlide";

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
            <QuestionSlide/>
        </QuizContainer>
    );
};

export default QuizLoadingScreen;