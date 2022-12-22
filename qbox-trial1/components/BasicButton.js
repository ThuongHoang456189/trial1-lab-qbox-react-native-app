import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const BasicButton = (props) => {
    const content = (
        <View style={[styles.button, props.style]}>
            <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
        </View>
    );
    return (
        <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        alignItems: 'center'
    },
    text: {
        color: '#fefefe'
    }
});

export default BasicButton;