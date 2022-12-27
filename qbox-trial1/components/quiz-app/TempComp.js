import React, {useEffect, useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {scrollTo, useAnimatedRef, useDerivedValue, useSharedValue} from "react-native-reanimated";
import {ScrollView} from "react-native-gesture-handler";
import {questions} from "../../data/Questions";
import Ionicons from "@expo/vector-icons/Ionicons";
import QuestionNumberVector from "./QuestionNumberVector";
import scrollViewContext from "react-native/Libraries/Components/ScrollView/ScrollViewContext";

const ITEM_COUNT = 5;
const ITEM_SIZE = 100;
const ITEM_MARGIN = 10;

const nums = ["1-a", "2-b", "3-c", "4-d", "4-d", "4-d", "4-d", "4-d", "4-d", "4-d", "4-d", "4-d", "4-d", "4-d", "4-d" ]

const {height, width} = Dimensions.get("window");

const widthQNo = 150;

const TempComp = () => {

    const aref = useAnimatedRef();
    const scroll = useSharedValue(0);

    useDerivedValue(() => {
       scrollTo(aref, scroll.value * width, 0, true);
    });

    const [scrollValue, setScrollValue] = useState(scroll.value);
    const items = Array.from(Array(ITEM_COUNT).keys())

    const Incrementor = ({increment}) => (
        <View className="items-center justify-center">
            <TouchableOpacity
                onPress={() => {
                    scroll.value =
                        scroll.value + increment > 0 ? scroll.value + increment : ITEM_COUNT - 1 + increment;

                    if(scroll.value >= ITEM_COUNT - 1){
                        scroll.value = 0;
                    }

                    setScrollValue(scroll.value);
                }}>
                <Text>{`Scroll ${Math.abs(increment)} ${increment > 0 ? 'down' : 'up'}`}</Text>
                <Text>{scroll.value}</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View className="flex-1 flex-col">
            <Incrementor increment={1}/>
            <View style={{width: '100%', height: (ITEM_SIZE + 2 * ITEM_MARGIN) * 2}}>
                <ScrollView ref={aref} className="bg-orange-300 flex-row" horizontal={true} showsHorizontalScrollIndicator={false} scrollEnabled={true}>
                {/*    <Text>Hi</Text>*/}
                {/*    /!*{questions.map((quiz, index) => {*!/*/}
                {/*    /!*    <Text>{`Question ${index+1}: ${quiz.question}`}</Text>*!/*/}
                {/*    /!*})}*!/*/}
                {/*{nums.map((_,index) => (*/}
                {/*    <Text key={index}>{index}{index}{index}{index}{index}</Text>*/}
                {/*))}*/}
                {/*    <Text>Hi there</Text>*/}
                    {questions.map((_, index) => (
                        <View key={index} width={width} className="bg-blue-300">
                            <Text>{_.question}</Text>
                        </View>
                    ))}
                </ScrollView>

                <ScrollView ref={aref} className="bg-orange-300 flex-row" horizontal={true} showsHorizontalScrollIndicator={false} scrollEnabled={true}>
                    {/*    <Text>Hi</Text>*/}
                    {/*    /!*{questions.map((quiz, index) => {*!/*/}
                    {/*    /!*    <Text>{`Question ${index+1}: ${quiz.question}`}</Text>*!/*/}
                    {/*    /!*})}*!/*/}
                    {/*{nums.map((_,index) => (*/}
                    {/*    <Text key={index}>{index}{index}{index}{index}{index}</Text>*/}
                    {/*))}*/}
                    {/*    <Text>Hi there</Text>*/}
                    {questions.map((_, index) => (
                        <View key={index} width={width} className="bg-blue-300">
                            <Text>{_.question}</Text>
                        </View>
                    ))}
                </ScrollView>

                <ScrollView ref={aref} className="bg-orange-300 flex-row" horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEnabled={true}>
                    {/*    <Text>Hi</Text>*/}
                    {/*    /!*{questions.map((quiz, index) => {*!/*/}
                    {/*    /!*    <Text>{`Question ${index+1}: ${quiz.question}`}</Text>*!/*/}
                    {/*    /!*})}*!/*/}
                    {/*{nums.map((_,index) => (*/}
                    {/*    <Text key={index}>{index}{index}{index}{index}{index}</Text>*/}
                    {/*))}*/}
                    {/*    <Text>Hi there</Text>*/}
                    {questions.map((_, index) => (
                        <View key={index} width={width} className="bg-purple-500">
                            <Text>{_.question}</Text>
                        </View>
                    ))}
                </ScrollView>


            </View>

            <View className="rounded-full bg-green-300 h-14 w-14 items-center justify-center">
                <Ionicons name="chevron-back" size={45} color="blue"/>
            </View>

            <View className="rounded-full bg-green-300 h-14 w-14 items-center justify-center">
                <Ionicons name="chevron-forward" size={45} color="blue"/>
            </View>

            {/*Calculate Amax*/}
            <QuestionNumberVector />
        </View>
    );
};

export default TempComp;