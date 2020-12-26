import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {
    setJSExceptionHandler,
    setNativeExceptionHandler,
} from 'react-native-exception-handler';
import Toast from 'react-native-toast-message';

import { ErrorFallback } from './ErrorFallback';

setJSExceptionHandler((error, isFatal) => {
    console.log(error, isFatal);
    Toast.show({
        text1: 'Something went wrong ',
        text2: 'we will fix it ASAP ',
        bottomOffset: 80,
        type: 'error',
        position: 'bottom',
    });
});

setNativeExceptionHandler(exceptionString => {
    console.log({ exceptionString });
});

const myErrorHandler = (error: Error) => {
    console.log(error);
};

export const ErrorHandler = ({ children }: { children: React.ReactNode }) => (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        {children}
    </ErrorBoundary>
);
