import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, Keyboard, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Loading from '../components/Loading';

const SignupScreen = ({ navigation }) => {
    const [input, setInput] = useState({
        email: "",
        fullname: "",
        phone: "",
        password: ""
    })
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false);

    const validate = () => {
        Keyboard.dismiss();
        let valid = true;

        if (!input.email) {
            handleError("Please input email!", "email")
            valid = false;
        } else if (!input.email.match(/\S+@\S+\.\S+/)) {
            handleError("Please input valid email!", "email")
            valid = false;
        }
        
        if (!input.fullname) {
            handleError("Please input fullname!", "fullname")
            valid = false;
        }
        
        if (!input.phone) {
            handleError("Please input phone number!", "phone")
            valid = false;
        }
        
        if (!input.password) {
            handleError("Please input password!", "password")
            valid = false;
        } else if (input.password.length < 5) {
            handleError("Min password length of 5!", "password")
            valid = false;
        }

        if (valid) {
            Signup();
        }
    }

    const Signup = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)

            try {
                AsyncStorage.setItem("user", JSON.stringify(input));
                navigation.navigate("LoginScreen");
            } catch (error) {
                Alert.alert("Error", "Something went wrong")
            }
        }, 3000);
    }

    const handleError = (errMessage, input) => {
        setError(prevState => ({ ...prevState, [input]: errMessage }))
    }

    const handleOnChange = (text, input) => {
        setInput((prevState) => ({ ...prevState, [input]: text }))
    }
    console.log(input);
    return (
        <SafeAreaView style={styles.container}>
            <Loading visible={loading} />
            <ScrollView
                contentContainerStyle={{
                    paddingTop: 50,
                    paddingHorizontal: 20
                }}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.text}>Enter your details for Signup</Text>
                <View style={styles.inner_container}>
                    <Input
                        placeholder="Enter your email address"
                        iconName="envelope"
                        label="Email"
                        error={error.email}
                        onFocus={() => {
                            handleError(null, "email")
                        }}
                        onChangeText={(text) => handleOnChange(text, "email")}
                    />
                    <Input
                        placeholder="Enter your fullname"
                        iconName="user"
                        label="Fullname" error={error.fullname}
                        onFocus={() => {
                            handleError(null, "fullname")
                        }}
                        onChangeText={(text) => handleOnChange(text, "fullname")}
                    />
                    <Input
                        keyboardType="numeric"
                        placeholder="Enter your phone number"
                        iconName="phone"
                        label="Phone Number"
                        error={error.phone}
                        onFocus={() => {
                            handleError(null, "phone")
                        }}
                        onChangeText={(text) => handleOnChange(text, "phone")}
                    />
                    <Input
                        placeholder="Enter your password"
                        iconName="lock"
                        label="Password"
                        error={error.password}
                        onFocus={() => {
                            handleError(null, "password")
                        }}
                        onChangeText={(text) => handleOnChange(text, "password")}
                        password
                    />
                    <Button title="Sign Up" onPress={validate} />
                    <Text
                        onPress={() => navigation.navigate("LoginScreen")}
                        style={styles.loginText}
                    >
                        Already have an account? Login
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    title: {
        fontSize: 35,
        color: "#48B873",
        fontWeight: "bold"
    },
    text: {
        marginVertical: 10,
        fontSize: 15,
        color: "grey"
    },
    inner_container: {
        marginVertical: 20
    },
    loginText: {
        color: "black",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    }
})

export default SignupScreen;