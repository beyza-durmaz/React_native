import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import styles from './MealsCard.style';

const MealsCard = ({ meal, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.meals_container}>
                <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
                <Text numberOfLines={1} style={styles.text}>{meal.strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealsCard;