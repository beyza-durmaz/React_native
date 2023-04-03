import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text, useWindowDimensions } from 'react-native';

const Loading = ({visible = false}) => {
    const {height, width} = useWindowDimensions();
    return visible && <View style={[styles.container, {height, width}]}>
        <View style={styles.loading}>
            <ActivityIndicator size='large' color={"#48B873"} />
            <Text style={styles.loadText}>Loading...</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center"
    },
    loading: {
        height: 70,
        backgroundColor: "#fff",
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    loadText: {
        fontSize: 16,
        marginHorizontal: 10,
        color: "black"
    }
})

export default Loading;