import React, {useState} from 'react';
import {Dimensions, SafeAreaView, Text, View} from "react-native";
import PlatformSafeView from "../PlatformSafeView";
import {ScrollView} from "react-native-gesture-handler";
import Question from "./Question";



const QuizContainer = ({navigator}) => {
    return (
        <SafeAreaView style={PlatformSafeView.PlatformSafeArea} className="bg-white">
            <View className="flex-1 justify-start bg-blue-200">
                <Question/>
            </View>
        </SafeAreaView>
    );
};

export default QuizContainer;