import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, Alert, Keyboard } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Loading from '../components/Loading';

const LoginScreen = ({ navigation }) => {
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
            valid = false;
            handleError("Please input email!", "email")
        }

        if (!input.password) {
            handleError("Please input password", "password")
        }

        if (valid) {
            login();
        }
    }

    const login = () => {
        setLoading(true);
        setTimeout(async () => {
            setLoading(false);
            let userData = await AsyncStorage.getItem("user");
            if (userData) {
                userData = JSON.parse(userData);
                if (input.email == userData.email && input.password == userData.password) {
                    AsyncStorage.setItem(
                        "user",
                        JSON.stringify({ ...userData, loggedIn: true })
                    )
                    navigation.navigate("HomeScreen")
                } else {
                    Alert.alert("Error", "Invalid Details")
                }
            } else {
                Alert.alert("Error", "User does not exist")
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
                <Text style={styles.title}>Login</Text>
                <Text style={styles.text}>Enter your details for Login</Text>
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
                    <Button title="Login" onPress={validate} />
                    <Text
                        onPress={() => navigation.navigate("SignupScreen")}
                        style={styles.loginText}
                    >
                        Don't have an account? Signup
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

export default LoginScreen;