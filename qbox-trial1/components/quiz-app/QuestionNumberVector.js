import React from 'react';
import {Text, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const QuestionNumberVector = () => {
    return (
        <View className="bg-yellow-400 justify-center items-center">
            <View width={300} className="bg-pink-300">
                <View className="rounded-full bg-green-300 h-14 w-14 items-center justify-center">
                    <Ionicons name="chevron-forward" size={45} color="blue"/>
                </View>
                <View className="rounded-full bg-green-300 h-14 w-14 items-center justify-center">
                    <Ionicons name="chevron-forward" size={45} color="blue"/>
                </View>
            </View>
        </View>
    );
};

export default QuestionNumberVector;