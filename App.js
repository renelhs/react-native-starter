/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { RootNavigator } from './src/navigation';
import Toast from 'react-native-toast-message';

import { Provider as AuthProvider } from './src/core/Auth/AuthContext';
import { ErrorHandler } from './src/ui';

const App: () => Node = () => {
    return (
        <AuthProvider>
            <ErrorHandler>
                <RootNavigator />
                <Toast ref={ref => Toast.setRef(ref)} />
            </ErrorHandler>
        </AuthProvider>
    );
};

export default App;
