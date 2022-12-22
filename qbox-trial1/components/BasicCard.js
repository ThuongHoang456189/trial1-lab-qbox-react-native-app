import React from 'react';
import {View} from "react-native";

const BasicCard = (props) => {
    return (
        <View className="mx-5 grow flex-row items-center bg-gray-300 rounded-md py-3.5 px-5 justify-between mb-3">
            {props.children}
        </View>
    );
};

export default BasicCard;