import React, {useState} from 'react';
import {Dimensions, SafeAreaView, Text, View} from "react-native";
import PlatformSafeView from "../PlatformSafeView";
import QuestionSlide from "./QuestionSlide";
import {verticalScale} from "react-native-size-matters";

const { height } = Dimensions.get("window");

const QuizContainer = (props) => {
    return (
        <SafeAreaView style={PlatformSafeView.PlatformSafeArea} className="bg-white">
            <View className="flex-1 justify-start bg-blue-200">
                <View className="justify-start flex-1 flex-col">
                    <View height={verticalScale(height)} className="bg-red-200">
                        {props.children}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default QuizContainer;