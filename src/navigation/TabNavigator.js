import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeTab, SettingsTab } from '../screens';

const Tab = createBottomTabNavigator();

const getRouteIcon = (route, size, color, focused): React.ReactNode => {
    let iconName;

    if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
};

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return getRouteIcon(route, size, color, focused);
                },
            })}>
            <Tab.Screen name="Home" component={HomeTab} />
            <Tab.Screen name="Settings" component={SettingsTab} />
        </Tab.Navigator>
    );
};
