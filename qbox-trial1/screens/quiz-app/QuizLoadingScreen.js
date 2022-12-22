import React, {useLayoutEffect} from 'react';
import {Dimensions, Image, SafeAreaView, Text, View} from "react-native";
import {moderateScale, verticalScale} from "react-native-size-matters";
import PlatformSafeView from "../../components/PlatformSafeView";
import {useNavigation} from "@react-navigation/native";

import Animated from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

const QuizLoadingScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    return (
        <SafeAreaView style={PlatformSafeView.PlatformSafeArea} className="bg-white">
            <View className="flex-1 justify-start bg-red-500">
                <View height={height * 0.5} className="justify-center items-center bg-blue-200">
                    <View
                        height={verticalScale(250)}
                        width={moderateScale(250)}
                        className="flex-row bg-white-300 items-center justify-center">
                        <Image source={{
                            uri: "https://links.papareact.com/wru"
                        }} className="w-full h-full bg-green-400 rounded-full"/>
                    </View>
                </View>

                <Animated.View>

                </Animated.View>
            </View>
        </SafeAreaView>
    );
};

export default QuizLoadingScreen;