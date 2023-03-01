import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1
    },
    img_container: {
        padding: 20,
        backgroundColor: 'white'
    },
    body_container: {
        padding: 10,
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.width / 2,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
    },
    desc: {
        fontStyle: 'italic',
        marginVertical: 10,
        color: 'black'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'right',
        color: 'black'
    }
})