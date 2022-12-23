import React, {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, Image, TextInput, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import PlatformSafeView from "../components/PlatformSafeView";
import Ionicons from "@expo/vector-icons/Ionicons";
import Categories from "../components/Categories";
import CustomizedUserDashboardTopTabs from "../components/CustomizedUserDashboardTopTabs";
import BasicHeader from "../components/BasicHeader";
import MenteeProfileSettings from "../components/MenteeProfileSettings";
import MentorIdentificationBadge from "../components/MentorIdentificationBadge";
import BasicCard from "../components/BasicCard";
import TitledIconButton from "../components/TitledIconButton";
import MenteeMentorRelationshipStatusCard from "../components/MenteeMentorRelationshipStatusCard";

const HomeScreen = () => {
    const navigator = useNavigation();

    useLayoutEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, []);

    return (
        <SafeAreaView style={PlatformSafeView.PlatformSafeArea} className="bg-white">

            {/*Header*/}
            <BasicHeader/>

            {/*Search component attached to header*/}
            {/*<View className="flex-row">*/}
            {/*    <View className="flex-row items-center space-x-1 bg-gray-200 p-2 pr-2.5 rounded">*/}
            {/*        <Ionicons name="search" color="gray" size={18}/>*/}
            {/*        <TextInput placeholder="Search" placeholderTextColor="gray" keyboardType="default"/>*/}
            {/*    </View>*/}
            {/*</View>*/}

            {/*body*/}
            {/*scrollable containter*/}
            <ScrollView className="bg-purple-400"
                        contentContainerStyle={{
                            paddingBottom: 100
                        }}>
                {/*Categories which are implemented as components*/}
                {/*<Categories/>*/}

                {/*Feature Rows*/}

                {/*Customized User Dashboard Top Tabs*/}
                <CustomizedUserDashboardTopTabs/>
                <MenteeProfileSettings/>
                <MentorIdentificationBadge navigator={navigator}/>
                <BasicCard>
                    <TitledIconButton title="Goals" name="checkmark-circle" size={35} color="purple"/>
                    <TitledIconButton title="Milestones" name="list" size={35} color="purple"/>
                    <TitledIconButton title="Email" name="mail" size={35} color="purple"/>
                    <TitledIconButton title="Skype" name="flower" size={35} color="purple"/>
                    <TitledIconButton title="Chat" name="chatbox" size={35} color="purple"/>
                </BasicCard>
                <MenteeMentorRelationshipStatusCard icon="people-outline" title="Conclude Relationship" content="Matched since: Aug, 2019"/>
                <MenteeMentorRelationshipStatusCard icon="time-outline" title="Relationship Timeline" content="Total Hours: 10 hours"/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;