import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

function MemberResult({route}) {

    const {user} = route.params;

    return(
        <SafeAreaView>
            <Text style={styles.message}>Kayıt Tamamlandı.</Text>
            <Text style={styles.label}>Üye Soyadı: {user.userName}</Text>
            <Text style={styles.label}>Üye Yaşı: {user.userSurname}</Text>
            <Text style={styles.label}>Üye Adı: {user.userAge}</Text>
            <Text style={styles.label}>Üye E-postası: {user.userMail}</Text>
            <Text style={styles.label}>Üye Memleketi: {user.userHometown}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
    },
    message: {
        fontSize: 40,
        fontWeight: 'bold',
    }
})

export default MemberResult;