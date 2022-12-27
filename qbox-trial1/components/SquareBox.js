import React from 'react';
import {View} from "react-native";

const SquareBox = (props) => {
    return (
        <View height={props.edgeWidth} width={props.edgeWidth}>
            {props.children}
        </View>
    );
};

export default SquareBox;