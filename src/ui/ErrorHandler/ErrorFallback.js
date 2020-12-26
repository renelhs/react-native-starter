import React from 'react';
import { Text, View } from 'react-native';
import { UIButton } from '../../ui';

export function ErrorFallback({ resetErrorBoundary }: any) {
    return (
        <View>
            <Text>Something went wrong:</Text>
            <UIButton label="try Again" onPress={resetErrorBoundary} />
        </View>
    );
}
