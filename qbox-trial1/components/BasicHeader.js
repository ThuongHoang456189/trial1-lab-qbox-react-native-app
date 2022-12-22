import React from 'react';
import {Image, Text, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const BasicHeader = () => {
    {/*Header*/}
    return (
        <View className="relative flex-row px-2 bg-gray">
            <View className="absolute h-full w-full flex-row items-center">
                <View className="grow"></View>
                {/*Logo*/}
                <Text>Logo</Text>
                <View className="grow"></View>
            </View>

            <Ionicons name="menu-outline" size={47} className="flex-none"/>
            <View className="grow"></View>
            <Image source={{
                uri: "https://links.papareact.com/wru"
            }}
                   className="flex-none h-10 w-10 bg-gray rounded-full self-center mr-1"/>
        </View>
    );
};

export default BasicHeader;