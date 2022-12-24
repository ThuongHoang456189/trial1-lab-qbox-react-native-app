import React from 'react';
import {ScrollView} from "react-native-gesture-handler";
import {Dimensions, Text, View} from "react-native";
import BasicButton from "../BasicButton";

const { height } = Dimensions.get("window");

const Question = () => {
    return (
        <View className="flex-1 justify-start bg-blue-200">
            <ScrollView vertical className="overflow-auto">
                {/*Question*/}
                <Text className="flex-none font-bold text-blue-900 pb-5" style={{fontSize: 50}}>Question 1</Text>
                <Text className="flex-none font-bold text-blue-900 pb-5" style={{fontSize: 50}}>Read the following paragraph and choose the right answer</Text>
                <Text className="flex-none font-bold text-blue-900 pb-5" style={{fontSize: 50}}>READING: I got up at 5 a.m.</Text>
                <Text className="flex-none font-bold text-blue-900 pb-5" style={{fontSize: 50}}>What time did he get up?</Text>

                {/*Answer*/}
                <BasicButton
                    className="mx-6 mb-2 text-center" title="Answer A"
                    textStyle={{fontSize: 16}}
                    style={{backgroundColor: 'purple', height: 50}}/>
                <BasicButton
                    className="mx-6 mb-2" title="Answer A"
                    textStyle={{fontSize: 16}}
                    style={{backgroundColor: 'purple', height: 50}}/>
                <BasicButton
                    className="mx-6 mb-2" title="Answer A"
                    textStyle={{fontSize: 16}}
                    style={{backgroundColor: 'purple', height: 50}}/>
                <BasicButton
                    className="mx-6 mb-2" title="Answer A"
                    textStyle={{fontSize: 16}}
                    style={{backgroundColor: 'purple', height: 50}}/>

                {/*Submit*/}
                <BasicButton
                    onPress={() => {
                        navigator.navigate("QuizScreen");
                    }}
                    title="SUBMIT" textStyle={{fontSize: 20, fontWeight: 'bold', color: '#1e3a8a'}}
                    style={{backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 50, borderRadius: 50, marginHorizontal: 90}}/>
            </ScrollView>
        </View>
    );
};

export default Question;