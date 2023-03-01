import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import styles from './Detail.style';
import DetailCard from "../../components/DetailCard";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";

const Detail = ({route}) => {
    const {idMeal} = route.params;
    const {data, loading, error} = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal);

    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }

    const renderDetail = ({item}) => <DetailCard detail={item}/>

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={data.meals} renderItem={renderDetail} />
        </SafeAreaView>
    )
}

export default Detail;