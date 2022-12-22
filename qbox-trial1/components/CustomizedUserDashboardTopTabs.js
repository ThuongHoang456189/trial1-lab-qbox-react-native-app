import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {Animated, View, TouchableOpacity, Text} from 'react-native';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

// const CustomizedUserDashboardTabBar = ({ state, descriptors, navigation, position }) => {
//     return (
//         <View style={{ flexDirection: 'row' }}>
//             {state.routes.map((route, index) => {
//                 const { options } = descriptors[route.key];
//                 const label =
//                     options.tabBarLabel !== undefined
//                         ? options.tabBarLabel
//                         : options.title !== undefined
//                             ? options.title
//                             : route.name;
//
//                 const isFocused = state.index === index;
//
//                 const onPress = () => {
//                     const event = navigation.emit({
//                         type: 'tabPress',
//                         target: route.key,
//                         canPreventDefault: true,
//                     });
//
//                     if (!isFocused && !event.defaultPrevented) {
//                         // The `merge: true` option makes sure that the params inside the tab screen are preserved
//                         navigation.navigate({ name: route.name, merge: true });
//                     }
//                 };
//
//                 const onLongPress = () => {
//                     navigation.emit({
//                         type: 'tabLongPress',
//                         target: route.key,
//                     });
//                 };
//
//                 const inputRange = state.routes.map((_, i) => i);
//                 const opacity = position.interpolate({
//                     inputRange,
//                     outputRange: inputRange.map(i => (i === index ? 1 : 0)),
//                 });
//
//                 return (
//                     <TouchableOpacity
//                         accessibilityRole="button"
//                         accessibilityState={isFocused ? { selected: true } : {}}
//                         accessibilityLabel={options.tabBarAccessibilityLabel}
//                         testID={options.tabBarTestID}
//                         onPress={onPress}
//                         onLongPress={onLongPress}
//                         style={{ flex: 1 }}
//                         key={index}
//                     >
//                         {/*<Animated.Text style={{ opacity }}>*/}
//                         {/*    {label}*/}
//                         {/*</Animated.Text>*/}
//                         <Text>{label}</Text>
//                     </TouchableOpacity>
//                 );
//             })}
//         </View>
//     );
// };

function UserScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>User!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View>
            <Text>Profile!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

const CustomizedUserDashboardTopTabs = () => {
    return (
        // <Tab.Navigator tabBar={(props) => <CustomizedUserDashboardTabBar {...props}/>}>
        <Tab.Navigator>
            <Tab.Screen name="User" component={UserScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default CustomizedUserDashboardTopTabs;