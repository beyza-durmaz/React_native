import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import styles from './Categories.style';

import CategoryCard from "../../components/CategoryCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";


const Categories = ({navigation}) => {
    const {loading, error, data} = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    const handleSelect = strCategory => {
        navigation.navigate('Meals', {strCategory})
    }

    const renderCategory = ({ item }) => <CategoryCard category={item} onSelect={() => handleSelect(item.strCategory)}/>

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data.categories} renderItem={renderCategory} />
        </SafeAreaView>
    )
}

export default Categories;