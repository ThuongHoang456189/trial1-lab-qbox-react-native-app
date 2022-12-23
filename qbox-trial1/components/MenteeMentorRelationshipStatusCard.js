import React from 'react';
import BasicCard from "./BasicCard";
import {Text, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const MenteeMentorRelationshipStatusCard = (props) => {
    return (
        <BasicCard>
            <View className="flex-none">
                <Ionicons name={props.icon} size={45} color="purple"/>
            </View>
            <View className="grow flex-col justify-between pl-2">
                <Text className="flex-none font-bold text-purple-900" style={{fontSize: 16}}>{props.content}</Text>
                <Text className="flex-none font-bold text-blue-500" style={{fontSize: 16}}>{props.title}</Text>
            </View>
        </BasicCard>
    );
};

export default MenteeMentorRelationshipStatusCard;