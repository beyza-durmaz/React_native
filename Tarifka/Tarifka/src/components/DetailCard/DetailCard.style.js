import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get('window').width;

export default StyleSheet.create({
    detail_container: {
        flex: 1
    },
    image: {
        width: deviceSize,
        minHeight: 250,
    },
    content_area: {
        paddingHorizontal: 8
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#A52A2A',
        paddingHorizontal: 8,
        paddingTop: 5
    },
    area: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#A52A2A',
        marginBottom: 7,
        paddingHorizontal: 8
    },
    desc: {
        textAlign: 'justify',
        marginTop: 7,
        paddingHorizontal: 8
    },
    button: {
        padding: 10,
        margin: 8,
        backgroundColor: 'red',
        borderRadius: 5,
        marginVertical: 12
    },
    button_text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }
})