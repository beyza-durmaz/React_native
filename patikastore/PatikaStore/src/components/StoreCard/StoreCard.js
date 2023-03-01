import React from "react";
import { View, Text, Image } from "react-native";
import styles from './StoreCard.style';

const StoreCard = ({ cards }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: cards.imgURL }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{cards.title}</Text>
                <Text style={styles.price}>{cards.price}</Text>
                {!cards.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
            </View>
        </View>
    )
}

export default StoreCard;