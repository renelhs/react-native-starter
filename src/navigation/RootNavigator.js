import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TabNavigator } from './TabNavigator';
import { AuthNavigator } from './AuthNavigator';

import { Context as AuthContext } from '../core/Auth/AuthContext';

enableScreens();

const Stack = createNativeStackNavigator();

const Root = () => {
    const { state, restore_token, logout } = useContext(AuthContext);

    useEffect(() => {
        RNBootSplash.hide({ fade: true });

        const checkToken = async () => {
            let userToken;
            let username;

            try {
                userToken = await AsyncStorage.getItem('@token');
                username = await AsyncStorage.getItem('@username');

                if (userToken !== null) {
                    restore_token({
                        type: 'RESTORE_TOKEN',
                        token: userToken,
                        username: username,
                    });
                }
            } catch (e) {
                logout();
            }
        };

        checkToken();
    }, []);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardOverlayEnabled: false,
                gestureEnabled: false,
                animationTypeForReplace: !state.token ? 'pop' : 'push',
            }}>
            {state.token === null ? (
                <Stack.Screen name="Auth" component={AuthNavigator} />
            ) : (
                <Stack.Screen name="App" component={TabNavigator} />
            )}
        </Stack.Navigator>
    );
};

export const RootNavigator = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <Root />
        </NavigationContainer>
    </SafeAreaProvider>
);
