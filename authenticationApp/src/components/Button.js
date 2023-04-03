import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function Button({ title, onPress = () => { } }) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={styles.btn_container}
        >
            <Text style={styles.title_style}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn_container: {
        height: 55,
        width: "100%",
        backgroundColor: "#48B873",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },
    title_style: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default Button;