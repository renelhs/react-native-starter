import React from 'react';
import { Text, Pressable } from 'react-native';

import styles from './Button.styles';

export const UIButton = ({ onPress, title }) => (
    <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            {
                backgroundColor: pressed
                    ? 'rgba(56, 151, 241, 0.8)'
                    : 'rgb(56, 151, 241)',
            },
            styles.wrapperCustom,
        ]}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
);
