import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
    PlatformSafeArea:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});