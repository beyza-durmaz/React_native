import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        borderWidth: 1,
        borderColor: '#bdbdbd',
        margin: 10,
        flexDirection: 'row'
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    body_container: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 16,
        color: 'black',
    },
})