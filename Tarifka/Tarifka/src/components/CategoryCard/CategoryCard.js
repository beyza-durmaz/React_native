import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({ category, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.category_container}>
                <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                <Text style={styles.title}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard;