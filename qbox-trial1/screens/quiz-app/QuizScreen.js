import React, {useLayoutEffect} from 'react';
import {Dimensions, Image, SafeAreaView, Text, View} from "react-native";
import PlatformSafeView from "../../components/PlatformSafeView";
import {useNavigation} from "@react-navigation/native";
import QuizContainer from "../../components/quiz-app/QuizContainer";

const { height } = Dimensions.get("window");

const QuizLoadingScreen = () => {
    const navigator = useNavigation();

    useLayoutEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, []);

    return (
        <QuizContainer navigator={navigator}/>
    );
};

export default QuizLoadingScreen;