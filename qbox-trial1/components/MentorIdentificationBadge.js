import React from 'react';
import {Image, Text, View} from "react-native";
import BasicButton from "./BasicButton";

const MentorIdentificationBadge = ({navigator}) => {
    return (
        <View className="flex-col h-64 items-center bg-purple-400 mt-3">
            <View className="relative grow flex-row items-center">
                <View className="flex-row items-center h-full w-32">
                    <Image source={{
                        uri: "https://links.papareact.com/wru"
                    }} className="flex-none h-32 w-32 bg-green-400 rounded-full"/>
                </View>

                <View className="absolute h-full w-32 flex-col items-center">
                    <View className="grow"></View>
                    <BasicButton
                        onPress={() => {
                            navigator.navigate("QuizStartingScreen");
                        }}
                        className="mb-2" title="Mentor"
                        textStyle={{fontSize: 14}}
                        style={{backgroundColor: 'purple', paddingVertical: 4, paddingHorizontal: 30}}/>
                </View>
            </View>

            <Text className="flex-none font-bold text-purple-900 text-2xl">Natalia Scott</Text>
            <Text className="flex-none text-gray-500 text-lg mb-7">Director of Sales</Text>
        </View>
    );
};

export default MentorIdentificationBadge;