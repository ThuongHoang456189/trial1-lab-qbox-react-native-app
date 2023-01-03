import React, {useLayoutEffect} from 'react';
import {Dimensions, Image, SafeAreaView, Text, View} from "react-native";
import {moderateScale, verticalScale} from "react-native-size-matters";
import PlatformSafeView from "../../components/PlatformSafeView";
import {useNavigation} from "@react-navigation/native";

import Animated from "react-native-reanimated";
import BasicButton from "../../components/BasicButton";

const { height } = Dimensions.get("window");

const QuizStartingScreen = () => {
    const navigator = useNavigation();

    useLayoutEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, []);

    const borderRadius = 150;

    return (
        <SafeAreaView style={PlatformSafeView.PlatformSafeArea} className="bg-white">
            <View className="flex-1 justify-start bg-blue-200">
                <View
                    height={height * 0.55}
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
                height={height * 0.45}
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
                    className="flex-col items-center justify-center ">
                    <Text className="flex-none font-bold text-blue-900 pb-5" style={{fontSize: 50}}>Quiz App</Text>
                    <Text className="flex-none text-blue-900 text-center" style={{fontSize: 18}}>Aren't you a Japanese?</Text>
                    <Text className="flex-none text-blue-900 pb-5 text-center" style={{fontSize: 18}}>Your Japanese is so amazing!</Text>
                    <BasicButton
                        onPress={() => {
                            navigator.navigate("VolcanoScreen");
                        }}
                        title="START QUIZ" textStyle={{fontSize: 20, fontWeight: 'bold', color: '#1e3a8a'}}
                        style={{backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 50, borderRadius: 50}}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default QuizStartingScreen;