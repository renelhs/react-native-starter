import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { UIButton } from '../../ui';

import { Context as AuthContext } from '../../core/Auth/AuthContext';

import styles from './Home.styles';

export const HomeTab = () => {
    const { logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text variant="header" textAlign="center">
                Home View
            </Text>
            <UIButton title="Logout" onPress={logout} />
        </View>
    );
};
