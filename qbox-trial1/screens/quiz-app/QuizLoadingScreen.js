import React, {useLayoutEffect} from 'react';
import {Dimensions, Image, SafeAreaView, Text, View} from "react-native";
import PlatformSafeView from "../../components/PlatformSafeView";
import {useNavigation} from "@react-navigation/native";

const { height } = Dimensions.get("window");

const QuizLoadingScreen = () => {
    const navigator = useNavigation();

    useLayoutEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, []);

    return (
        <SafeAreaView style={PlatformSafeView.PlatformSafeArea} className="bg-white">
            <View className="flex-1 justify-start bg-blue-200">
                <View
                    height={height}
                    className="flex-row items-center justify-center">
                    <Text className="flex-none text-white pb-5" style={{fontSize: 30}}>Loading ...</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default QuizLoadingScreen;