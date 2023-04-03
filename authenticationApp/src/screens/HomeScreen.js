import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
            setUserDetails(JSON.parse(userData))
        }
    }

    const logout = () => {
        AsyncStorage.setItem("user", JSON.stringify({ ...userDetails, loggedIn: false }))
        navigation.navigate("LoginScreen");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {userDetails?.fullname}</Text>
            <Button title="Logout" onPress={logout} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 40
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default HomeScreen;