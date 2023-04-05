import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {
    const postInfo = [
        {
            postTitle: "Your name",
            postPersonImage: require("../../storage/img/userProfile.jpg"),
            postImage: require("../../storage/img/post1.jpg"),
            likes: 765,
            isLiked: false,
        },
        {
            postTitle: "Ahmet",
            postPersonImage: require("../../storage/img/profile5.jpg"),
            postImage: require("../../storage/img/post3.jpg"),
            likes: 130,
            isLiked: false,
        },
        {
            postTitle: "Ayşe",
            postPersonImage: require("../../storage/img/profile2.jpg"),
            postImage: require("../../storage/img/post4.jpg"),
            likes: 550,
            isLiked: false,
        },
        {
            postTitle: "Hazar",
            postPersonImage: require("../../storage/img/profile1.jpg"),
            postImage: require("../../storage/img/post2.jpg"),
            likes: 1000,
            isLiked: false,
        },
    ];

    return (
        <View>
            {
                postInfo.map((data, index) => {
                    const [like, setLike] = useState(data.isLiked)

                    return (
                        <View key={index} style={styles.container}>
                            <View style={styles.inner_container}>
                                <View style={styles.imgContainer}>
                                    <Image source={data.postPersonImage} style={styles.personImg} />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.text}>{data.postTitle}</Text>
                                    </View>
                                </View>
                                <Feather name='more-vertical' size={20} />
                            </View>
                            <View style={styles.postContainer}>
                                <Image source={data.postImage} style={styles.postImg} />
                            </View>
                            <View style={styles.iconsContainer}>
                                <View style={styles.icons}>
                                    <TouchableOpacity onPress={() => setLike(!like)}>
                                        <AntDesign
                                            name={like ? "heart" : "hearto"}
                                            style={styles.like}
                                            color={like ? "red" : "black"}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionic
                                            name='ios-chatbubble-outline'
                                            style={styles.chat}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feather
                                            name='navigation'
                                            size={20}
                                            color={"black"}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Feather name='bookmark' size={20} color={"black"} />
                            </View>
                            <View style={{paddingHorizontal: 15}}>
                                <Text style={{color: "black"}}>
                                    Liked by {like ? "you and" : ""} {""}
                                    {like ? data.likes + 1 : data.likes} others
                                </Text>
                                <Text style={styles.postText}>
                                    Great moment!!
                                </Text>
                                <Text style={{
                                    opacity: 0.4,
                                    paddingVertical: 2,
                                    color: "black"
                                }}>
                                    View all comments
                                </Text>
                                <View style={styles.footer}>
                                    <View style={styles.imgContainer}>
                                        <Image source={data.postPersonImage} style={styles.profile} />
                                        <TextInput placeholder='Add a comment' opacity={0.5} />
                                    </View>
                                    <View style={{flexDirection: "row", alignItems: "center"}}>
                                        <Entypo name='emoji-happy' size={15} color={"lightgreen"} marginRight={10} />
                                        <Entypo name='emoji-neutral' size={15} color={"pink"} marginRight={10} />
                                        <Entypo name='emoji-sad' size={15} color={"red"} marginRight={10} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        borderBottomWidth: 0.1,
        borderBottomColor: "gray"
    },
    inner_container: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-between",
        alignItems: "center"
    },
    imgContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    personImg: {
        borderRadius: 100,
        width: 40,
        height: 40,
    },
    textContainer: {
        paddingLeft: 5
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black"
    },
    postContainer: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
    },
    postImg: {
        width: "100%",
        height: 400
    },
    like: {
        fontSize: 20,
        paddingRight: 10,
    },
    chat: {
        paddingRight: 10,
        fontSize: 20,
        color: "black",
    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 15,
    },
    icons: {
        flexDirection: "row",
        alignItems: "center"
    },
    postText: {
        fontSize: 14,
        fontWeight: 700,
        paddingVertical: 2,
        color: "black"
    },
    profile: {
        width: 25,
        height: 25,
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: "orange"
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default Post;