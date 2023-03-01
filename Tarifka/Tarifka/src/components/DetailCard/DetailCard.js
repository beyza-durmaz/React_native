import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { Divider } from '@rneui/themed';
import styles from './DetailCard.style';

const DetailCard = ({ detail }) => {
    return (
        <View style={styles.detail_container}>
            <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
            <Text style={styles.title}>{detail.strMeal}</Text>
            <Text style={styles.area}>{detail.strArea}</Text>
            <Divider width={1} />
            <Text style={styles.desc}>{detail.strInstructions}</Text>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(detail.strYoutube)}>
                <Text style={styles.button_text}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailCard;