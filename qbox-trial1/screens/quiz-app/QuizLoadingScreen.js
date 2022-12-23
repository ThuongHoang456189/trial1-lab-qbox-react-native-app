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

    const borderRadius = 150;

    return (
        <SafeAreaView style={PlatformSafeView.PlatformSafeArea} className="bg-white">
            <View className="flex-1 justify-start bg-blue-200">
                <View
                    height={height * 0.6}
                    borderTopRightRadius={120}
                    borderBottomRightRadius={borderRadius}
                    className="flex-row items-center justify-center bg-white">
                    {/*<Animated.View*/}
                    {/*    height={height}*/}
                    {/*    borderRadius={80}*/}
                    {/*    bottom={0.52*height}*/}
                    {/*    width={0.5*width}*/}
                    {/*    className="flex-none absolute bg-green-300 p-3">*/}

                    {/*</Animated.View>*/}
                    <View
                        height={verticalScale(250)}
                        width={moderateScale(250)}
                        className="flex-row items-center justify-center">
                        <Image source={{
                            uri: "https://links.papareact.com/wru"
                        }} className="w-full h-full"/>
                    </View>
                </View>


                {/*<View className="flex-row">*/}
                {/*    <Animated.View*/}
                {/*        height={height}*/}
                {/*        borderRadius={80}*/}
                {/*        top={0.52*height}*/}
                {/*        width={0.5*width}*/}
                {/*        className="flex-none absolute bg-green-300 p-3">*/}

                {/*    </Animated.View>*/}
                {/*</View>*/}


                {/*<View height={height * 0.5} className="justify-center items-center bg-blue-300">*/}
                {/*    <View*/}
                {/*        height={verticalScale(250)}*/}
                {/*        width={moderateScale(250)}*/}
                {/*        className="flex-row items-center justify-center">*/}
                {/*        <Image source={{*/}
                {/*            uri: "https://links.papareact.com/wru"*/}
                {/*        }} className="w-full h-full"/>*/}
                {/*    </View>*/}
                {/*</View>*/}


            </View>

            <View
                height={height * 0.4}
                borderTopLeftRadius={borderRadius}
                className="flex-row items-center justify-center bg-blue-200">
                {/*<Animated.View*/}
                {/*    height={height}*/}
                {/*    borderRadius={80}*/}
                {/*    bottom={0.52*height}*/}
                {/*    width={0.5*width}*/}
                {/*    className="flex-none absolute bg-green-300 p-3">*/}

                {/*</Animated.View>*/}
                <View
                    height={verticalScale(250)}
                    width={moderateScale(250)}
                    className="flex-row items-center justify-center">
                </View>
            </View>
        </SafeAreaView>
    );
};

export default QuizLoadingScreen;