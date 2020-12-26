import React, { useState, useContext } from 'react';

import {
    Keyboard,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
} from 'react-native';
import { Button } from 'react-native-elements';

import { Context as AuthContext } from '../../core/Auth/AuthContext';

import styles from './Login.styles';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>RN Starter</Text>
                        <TextInput
                            placeholder="Username"
                            onChangeText={setUsername}
                            placeholderColor="#666666"
                            style={styles.loginFormTextInput}
                            autoCapitalize="none"
                        />
                        <TextInput
                            placeholder="Password"
                            onChangeText={setPassword}
                            placeholderColor="#666666"
                            style={styles.loginFormTextInput}
                            secureTextEntry={true}
                        />
                        <Button
                            buttonStyle={styles.loginButton}
                            onPress={() => login({ username, password })}
                            title="Login"
                        />
                        <Button
                            buttonStyle={styles.registerButton}
                            onPress={() =>
                                navigation.navigate('Auth', {
                                    screen: 'Register',
                                })
                            }
                            title="Register"
                            type="clear"
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export { LoginScreen };
