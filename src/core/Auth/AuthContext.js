import AsyncStorage from '@react-native-async-storage/async-storage';

import createDataContext from './createDataContext';

const authReducer = (prevState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                token: action.payload.token,
                username: action.payload.username,
            };
        case 'RESTORE_TOKEN':
            return {
                token: action.payload.token,
                username: action.payload.username,
            };
        case 'LOGOUT':
            return { token: null, username: '' };
        default:
            return prevState;
    }
};

const storeData = async (token, username) => {
    try {
        await AsyncStorage.multiSet([
            ['@token', token],
            ['@username', username],
        ]);
    } catch (e) {
        // store error
    }
};

const removeData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        // remove error
    }
};

const login = dispatch => {
    return ({ username, password }) => {
        // Do some API Request here and store the data if success
        let token = 'some access token here';
        storeData(token, username).then();

        dispatch({
            type: 'LOGIN',
            payload: {
                token: token,
                username,
            },
        });
    };
};

const restore_token = dispatch => {
    return ({ token, username }) => {
        // Do some API Request here, you can validate the token or get new one

        dispatch({
            type: 'RESTORE_TOKEN',
            payload: {
                token: token,
                username: username,
            },
        });
    };
};

const logout = dispatch => {
    return () => {
        // Remove AsyncStorage data before logout
        removeData().then();

        dispatch({ type: 'LOGOUT' });
    };
};

const register = () => {
    return ({ username, password, email }) => {
        // Do some API Request here to register the new user
        console.log('Registered');
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { login, restore_token, logout, register },
    { token: null, username: '' },
);
