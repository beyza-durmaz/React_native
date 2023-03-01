import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

function Welcome({navigation}) {

    function goToMemberSign() {
        navigation.navigate('MemberSignScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Button text='Üye Kaydı OLuştur' onPress={goToMemberSign} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    }
})

export default Welcome;