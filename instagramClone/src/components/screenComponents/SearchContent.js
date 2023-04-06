import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const SearchContent = (props) => {
    const searchData = [
        {
            id: 0,
            images: [
                require("../../storage/img/post1.jpg"),
                require("../../storage/img/post2.jpg"),
                require("../../storage/img/post3.jpg"),
                require("../../storage/img/post4.jpg"),
                require("../../storage/img/post5.jpg"),
                require("../../storage/img/post6.jpg"),
            ]
        },
        {
            id: 1,
            images: [
                require("../../storage/img/post7.jpg"),
                require("../../storage/img/post8.jpg"),
                require("../../storage/img/post9.jpg"),
                require("../../storage/img/post10.jpg"),
                require("../../storage/img/post11.jpg"),
                require("../../storage/img/post12.jpg"),
            ]
        },
        {
            id: 2,
            images: [
                require("../../storage/img/post13.jpg"),
                require("../../storage/img/post14.jpg"),
                require("../../storage/img/post15.jpg"),
            ]
        },
    ];

    return (
        <View>
            {
                searchData.map((data, index) => {
                    return (
                        <>
                            {
                                data.id === 0 ?
                                    (
                                        <View style={styles.container}>
                                            {
                                                data.images.map((imgData, imgIndex) => {
                                                    return (
                                                        <TouchableOpacity
                                                            delayLongPress={500}
                                                            onLongPress={() => props.data(imgData)}
                                                            onPressOut={() => props.data(null)}
                                                            style={styles.imgContainer}
                                                        >
                                                            <Image source={imgData} style={styles.img} />
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                        </View >
                                    ) : null
                            }
                            {
                                data.id === 1 ?
                                    (
                                        <View style={styles.secondContainer}>
                                            <View style={styles.imgLayout}>
                                                {
                                                    data.images.slice(0, 4).map((imgData, imgIndex) => {
                                                        return (
                                                            <TouchableOpacity
                                                                delayLongPress={500}
                                                                onLongPress={() => props.data(imgData)}
                                                                onPressOut={() => props.data(null)}
                                                                style={styles.imgContainer}
                                                            >
                                                                <Image source={imgData} style={styles.img} />
                                                            </TouchableOpacity>
                                                        )
                                                    })
                                                }
                                            </View>
                                            <TouchableOpacity
                                                delayLongPress={500}
                                                onLongPress={() => props.data(data.images[5])}
                                                onPressOut={() => props.data(null)}
                                                style={{ marginLeft: 2 }}
                                            >
                                                <Image source={data.images[5]} style={styles.oneImg} />
                                            </TouchableOpacity>
                                        </View>
                                    ) : null
                            }
                            {
                                data.id === 2 ?
                                    (
                                        <View style={styles.secondContainer}>
                                            <TouchableOpacity
                                                delayLongPress={500}
                                                onLongPress={() => props.data(data.images[2])}
                                                onPressOut={() => props.data(null)}
                                                style={{ paddingRight: 2 }}>
                                                <Image
                                                    source={data.images[2]}
                                                    style={{ width: 274, height: 300 }}
                                                />
                                            </TouchableOpacity>
                                            <View style={{
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                                justifyContent: "space-between",
                                                width: 140,
                                            }}>
                                                {
                                                    data.images.slice(0, 2).map((imgData, imgIndex) => {
                                                        return (
                                                            <TouchableOpacity
                                                                delayLongPress={500}
                                                                onLongPress={() => props.data(imgData)}
                                                                onPressOut={() => props.data(null)}
                                                                style={{ paddingBottom: 2 }}>
                                                                <Image source={imgData} style={styles.img} />
                                                            </TouchableOpacity>
                                                        )
                                                    })
                                                }
                                            </View>
                                        </View>
                                    ) : null
                            }
                        </>
                    )
                })
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",

    },
    imgContainer: {
        paddingBottom: 2,
    },
    img: {
        width: 136,
        height: 150
    },
    secondContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imgLayout: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: 274,
    },
    oneImg: {
        width: 140,
        height: 300,
    }
})

export default SearchContent;