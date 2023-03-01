import React from 'react';
import { View, Text, Image } from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import styles from './Detail.style';

const Detail = ({ route }) => {
    const { id } = route.params;
    const { data, loading, error } = useFetch(`${Config.API_URL}/${id}`);

    if (error) {
        return <Error />
    }

    if (loading) {
        return <Loading />
    }

    return (
        <View style={styles.container} >
            <View style={styles.img_container}>
                <Image source={{ uri: data.image }} style={styles.image} />
            </View>
            <View style={styles.body_container}>
                <Text style={styles.title} >{data.title}</Text>
                <Text style={styles.desc} >{data.description}</Text>
                <Text style={styles.price} >{data.price} TL</Text>
            </View>
        </View>
    )
}

export default Detail;