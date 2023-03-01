import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inner_container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: 'black',
        fontSize: 27,
        fontWeight: 'bold',
    },
    info_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    artist: {
        color: 'black',
    },
    year: {
        fontSize: 12,
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold'
    },
    soldout_container: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 5
    },
    soldout_title: {
        color: 'red',
        fontSize: 12
    },
    content_container: {
        flexDirection: 'row',
    },
    album: {
        fontSize: 12,
        fontWeight: 'bold',
    }
})