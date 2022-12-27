import React from 'react';
import {Text, View} from "react-native";

const StackableView = () => {
    return (
        <View>
            <View className="absolute bg-transparent">
                <Text>Hello</Text>
            </View>
            <View className="absolute bg-transparent">
                <Text>Question</Text>
            </View>
            <View className="absolute bg-transparent">
                <Text>NoNo</Text>
            </View>
            <View className="absolute bg-transparent">
                <Text>Yasuminasai</Text>
            </View>
        </View>
    );
};

export default StackableView;