import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Animated,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Status = ({ route, navigation }) => {
    const { name } = route.params;
    const { image } = route.params;

    const [progress, setProgress] = useState(new Animated.Value(0));

    useEffect(() => {
        let timer = setTimeout(() => {
            navigation.goBack();
        }, 5000);

        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,
        }).start();
        return () => clearTimeout(timer);
    }, [])

    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ["0%", "100%"]
    })

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.statusLine}>
                <Animated.View width={progressAnimation} style={styles.inner_statusLine}></Animated.View>
            </View>
            <View style={styles.statusImgContainer}>
                <View style={styles.statusImg}>
                    <Image source={image} style={styles.img} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{name}</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionic name='close' style={styles.closeBtn} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={image} style={styles.story} />
            <View style={styles.inputContainer}>
                <TextInput placeholder='Send message' placeholderTextColor="white" style={styles.txtInput} />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name='navigation' size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor: "black",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    statusLine: {
        height: 3,
        width: "95%",
        borderWidth: 1,
        backgroundColor: "gray",
        position: "absolute",
        top: 18
    },
    inner_statusLine: {
        height: "100%",
        backgroundColor: "white"
    },
    statusImgContainer: {
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        width: "90%",
        top: 12,
        left: 0
    },
    statusImg: {
        borderRadius: 100,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        borderRadius: 100,
        backgroundColor: "orange",
        resizeMode: "cover",
        width: "92%",
        height: "92%"
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    text: {
        color: "white",
        fontSize: 15,
        paddingLeft: 10
    },
    closeBtn: {
        color: "white",
        fontSize: 20,
        opacity: 0.6
    },
    story: {
        position: "absolute",
        width: "100%",
        height: 500
    },
    inputContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 10,
        width: "100%"
    },
    txtInput: {
        borderColor: "white",
        borderRadius: 25,
        width: "85%",
        height: 50,
        paddingLeft: 20,
        borderWidth: 1,
        fontSize: 20,
        color: "white"
    }
})

export default Status;