import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const TitledIconButton = (props) => {
    return (
        <View className="flex-col pt-1">
            <View className="flex-row items-center pb-1.5">
                <View className="grow"/>
                <Ionicons name={props.name} size={props.size} color={props.color}/>
                <View className="grow"/>
            </View>

            <View className="flex-row items-center">
                <View className="grow"/>
                <Text textStyle={[styles.text, props.text]}>{props.title}</Text>
                <View className="grow"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: 'purple',
        fontWeight: 'bold'
    }
});

export default TitledIconButton;