import { StyleSheet } from "react-native";

export default StyleSheet.create({
    category_container: {
        flex: 1,
        marginVertical: 5,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        height: 70,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        borderColor: '#C5B7B3',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    title: {
        marginLeft: 10,
        fontSize: 20,
        color: 'black'
    }
})