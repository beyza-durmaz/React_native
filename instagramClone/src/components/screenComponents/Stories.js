import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { StyleSheet, View, Text, Image, ScrollView, TouchableWithoutFeedback  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stories = () => {
    const navigation = useNavigation();

    const storyInfo = [
        {
            id: 1,
            name: "Your name",
            image: require("../../storage/img/userProfile.jpg")
        },
        {
            id: 0,
            name: "Hayriye",
            image: require("../../storage/img/profile4.jpg")
        },
        {
            id: 0,
            name: "Ayşe",
            image: require("../../storage/img/profile2.jpg")
        },
        {
            id: 0,
            name: "Fatma",
            image: require("../../storage/img/profile3.jpg")
        },
        {
            id: 0,
            name: "Ahmet",
            image: require("../../storage/img/profile5.jpg")
        },
        {
            id: 0,
            name: "Hazar",
            image: require("../../storage/img/profile1.jpg")
        },
    ]
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 20 }}
        >
            {
                storyInfo.map((data, index) => {
                    return (
                        <TouchableWithoutFeedback 
                            key={index}
                            onPress={() => navigation.push("Status", {
                                name: data.name,
                                image: data.image,
                                })
                            }>
                            <View style={styles.container}>
                                {
                                    data.id == 1 ?
                                        (
                                            <View style={styles.stories}>
                                                <Entypo name="circle-with-plus" style={styles.story} />
                                            </View>
                                        ) : null
                                }
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={data.image}
                                        style={styles.storyImg}
                                    />
                                </View>
                                <Text
                                    style={styles.name}
                                    opacity={data.id == 0 ? 1 : 0.5}
                                >
                                    {data.name}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback >
                    )
                }
                )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: "column",
        paddingHorizontal: 8
    },
    stories: {
        position: "absolute",
        bottom: 15,
        right: 10,
        zIndex: 1
    },
    story: {
        fontSize: 23,
        backgroundColor: "white",
        color: "#405de6",
        borderRadius: 100,
    },
    storyImg: {
        resizeMode: "cover",
        width: "92%",
        height: "92%",
        borderRadius: 100,
        backgroundColor: "orange"
    },
    imgContainer: {
        width: 68,
        height: 68,
        backgroundColor: "white",
        borderWidth: 1.8,
        borderRadius: 100,
        borderColor: "#c13584",
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontSize: 13,
        textAlign: "center",
        // opacity: data.id == 0 ? 1 : 0.5,
    }
})

export default Stories;