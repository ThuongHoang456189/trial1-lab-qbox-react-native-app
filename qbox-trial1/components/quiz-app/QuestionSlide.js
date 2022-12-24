import React, {useRef} from 'react';
import {Dimensions, ScrollView, View} from "react-native";
import Animated from "react-native-reanimated";
import {questions} from "../../data/Questions";
import Question from "./Question";
// import {useScrollHandler} from "react-native-redash";

const { height, width } = Dimensions.get("window");

const QuestionSlide = ({navigator}) => {
    // const scroll = useRef<Animated.ScrollView>(null);
    const scroll = useRef(null);

    // const {x, scrollHandler} = useScrollHandler();

    return (
        <ScrollView
            ref={scroll}
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            bounces={false}>
            {questions.map((quiz, index) => {
                <Question {...{quiz, index}}/>
            })}
        </ScrollView>
    );
};

export default QuestionSlide;