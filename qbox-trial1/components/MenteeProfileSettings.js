import React from 'react';
import {Button, Image, Text, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import BasicButton from "./BasicButton";

const MenteeProfileSettings = () => {
    return (
        <View className="relative flex-row items-center mx-3 mt-8">
            <View className="ml-10 grow flex-row items-center bg-green-400 rounded-md py-2 pl-12 pr-3">
                <BasicButton title="Mentee" text={{fontSize: 12}} style={{backgroundColor: 'pink', paddingVertical: 3, paddingHorizontal: 15}}/>
                <View className="grow"/>
                <View className="flex-none pl-5">
                    <Ionicons name="images" size={27} color="blue"/>
                </View>
                <View className="flex-none pl-5">
                    <Ionicons name="settings" size={27} color="blue"/>
                </View>
                <View className="flex-none pl-5">
                    <Ionicons name="list" size={36} color="blue"/>
                </View>
            </View>

            <View className="absolute h-full w-full flex-row items-center">
                {/*Mentee Avatar*/}
                <Image source={{uri: "https://links.papareact.com/wru"}}
                       className="flex-none h-20 w-20 bg-red-400 rounded-full"/>
            </View>
        </View>
    );
};

export default MenteeProfileSettings;