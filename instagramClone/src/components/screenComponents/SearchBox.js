import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
    return (
        <View style={styles.container}>
            <Ionic name='search' style={styles.searchIcon} />
            <TextInput
                placeholder='Search'
                placeholderTextColor="#909090"
                style={styles.searchBar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingVertical: 10
    },
    searchIcon: {
        fontSize: 18,
        opacity: 0.7,
        position: "absolute",
        zIndex: 1,
        left: 25,
    },
    searchBar: {
        backgroundColor: "#ebebeb",
        width: "94%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 40,
        padding: 4,
        fontSize: 15,
    },
})

export default SearchBox;