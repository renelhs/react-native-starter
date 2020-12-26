import React, { useContext, useState } from 'react';

import {
    Keyboard,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Alert,
} from 'react-native';
import { Button } from 'react-native-elements';

import { Context as AuthContext } from '../../core/Auth/AuthContext';

import styles from '../Login/Login.styles';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('');

    const { register } = useContext(AuthContext);

    const handleRegister = () => {
        // Simple validation for testing
        if (password !== passwordConfirm) {
            Alert.alert('Passwords not match.');
        } else {
            register({ username, password, email });
            navigation.navigate('Auth', { screen: 'Login' });
        }
    };

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
                            autoCompleteType="off"
                            autoCorrect={false}
                        />
                        <TextInput
                            placeholder="Password"
                            onChangeText={setPassword}
                            placeholderColor="#666666"
                            style={styles.loginFormTextInput}
                            secureTextEntry={true}
                        />
                        <TextInput
                            placeholder="Confirm Password"
                            onChangeText={setPasswordConfirm}
                            placeholderColor="#666666"
                            style={styles.loginFormTextInput}
                            secureTextEntry={true}
                        />
                        <TextInput
                            placeholder="Email"
                            onChangeText={setEmail}
                            placeholderColor="#666666"
                            style={styles.loginFormTextInput}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Button
                            buttonStyle={styles.loginButton}
                            onPress={handleRegister}
                            title="Register"
                        />
                        <Button
                            buttonStyle={styles.registerButton}
                            onPress={() =>
                                navigation.navigate('Auth', { screen: 'Login' })
                            }
                            title="Registered? Go to login"
                            type="clear"
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export { RegisterScreen };
