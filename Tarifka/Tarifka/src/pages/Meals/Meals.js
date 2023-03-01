import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import MealsCard from "../../components/MealsCard";
import styles from './Meals.style';

import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";


const Meals = ({route, navigation}) => {
    const {strCategory} = route.params;
    const {data, loading, error} = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + strCategory);
    
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    function handleMeals(idMeal){
        navigation.navigate('Detail', {idMeal})
    }

    const renderMeals = ({item}) => <MealsCard meal={item} onSelect={() => handleMeals(item.idMeal)}/>

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={data.meals} renderItem={renderMeals}/>
        </SafeAreaView>
    )
}

export default Meals;