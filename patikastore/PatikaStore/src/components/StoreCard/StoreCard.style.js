import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        width: Dimensions.get('window').width / 2.2,
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 3.5,
        borderRadius: 10
    },
    inner_container: {
        padding: 5
    },
    title: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    price: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 15
    },
    stock: {
        color: 'red',
        marginTop: 5,
        fontWeight: 'bold'
    }
})