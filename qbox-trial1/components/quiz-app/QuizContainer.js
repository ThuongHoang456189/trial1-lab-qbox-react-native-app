import React from 'react';
import {Dimensions, SafeAreaView, Text, View} from "react-native";
import PlatformSafeView from "../PlatformSafeView";
import {ScrollView} from "react-native-gesture-handler";

const {height} = Dimensions.get("window");

const QuizContainer = ({navigator}) => {
    return (
        <SafeAreaView style={PlatformSafeView.PlatformSafeArea} className="bg-white">
            <View className="flex-1 justify-start bg-blue-200">
                <ScrollView
                    height={height*0.2}
                    vertical
                    className="overflow-auto">
                    <Text className="flex-none font-bold text-blue-900 pb-5" style={{fontSize: 50}}>Quiz App</Text>
                    <Text className="flex-none font-bold text-blue-900 pb-5" style={{fontSize: 50}}>Quiz App</Text>
                    <Text className="flex-none font-bold text-blue-900 pb-5" style={{fontSize: 50}}>Quiz App</Text>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default QuizContainer;